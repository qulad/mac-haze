# mac-haze — Architecture Overview

## Repos

| Repo | Role |
|---|---|
| `mac-haze` | Main repo: overview, GitHub Pages docs, releases |
| `mac-haze-app` | Tauri v2 Rust backend — SteamCMD, Wine, process executor |
| `mac-haze-web` | Nuxt 3 SPA frontend — library, friends, downloads UI |

`mac-haze-app` contains `mac-haze-web` as a `web/` submodule. `mac-haze` contains both as submodules.

## Tech Stack

| Layer | Technology |
|---|---|
| Desktop shell | Tauri v2 |
| Async runtime | tokio (Tauri's own runtime — not async_std) |
| Frontend | Nuxt 3 (`ssr: false`) + Vue 3 + TypeScript |
| Styling | Tailwind CSS v4 |
| Rust testing | cargo test + mockall + rstest |
| Frontend testing | Vitest (unit) + Playwright (E2E) |

## Security Model

All process execution goes through `ProcessExecutor` — no `sh -c`, no string interpolation.
User input is passed as `args: &[&str]`, never embedded in the executable path.
Executable whitelist enforced via `canonicalize()` before every spawn.

See [mac-haze-app/docs/SECURITY.md](https://github.com/qulad/mac-haze-app/blob/main/docs/SECURITY.md).

## Onboarding Saga

The app is locked behind a one-time onboarding that cannot be skipped:

1. **SteamCMD login** — username/password, optional Steam Guard 2FA
2. **API key validation** — `GetPlayerSummaries` confirms key is valid
3. **Cross-validation** — `GetOwnedGames(steamcmd_steam_id, api_key)` proves same account
4. **Persist** — credentials written to macOS Keychain

Each step has a compensation action. Failure at any step rolls back all prior steps.

## Distribution

`cargo tauri build` produces:
- `mac-haze.app` — drag to Applications
- `mac-haze.dmg` — published to GitHub Releases

The Nuxt frontend is statically bundled inside the `.app` via `nuxt generate`.
