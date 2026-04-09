# mac-haze

Play Windows-only Steam games on macOS — without Steam's broken GUI.

mac-haze uses **SteamCMD** to download games and **Wine** to run them, with a native macOS app providing a clean library and friends interface via the **Steam Web API**.

## Why

Modern Steam (post-Nov 2024) is 100% CEF-based. Wine cannot run `chrome_elf.dll`, so Steam's GUI crashes immediately. SteamCMD has no such dependency — it's a headless CLI that handles login, game download, and library listing. mac-haze wraps it in a proper desktop app.

## What You Get

- **Library** — browse your games with cover art and names
- **Friends** — see who's online and what they're playing
- **Downloads** — one-click download with real-time progress
- **Launcher** — launch downloaded games via Wine

## Requirements

- macOS (Apple Silicon or Intel)
- [Homebrew](https://brew.sh)
- Wine CrossOver — installed automatically on first launch

## Install

Download the latest `.dmg` from [Releases](https://github.com/qulad/mac-haze/releases).

## Docs

- [Installation Guide](https://qulad.github.io/mac-haze/installation)
- [Roadmap](https://qulad.github.io/mac-haze/roadmap)

## Repos

| Repo | Description |
|---|---|
| [mac-haze](https://github.com/qulad/mac-haze) | This repo — overview, docs, releases |
| [mac-haze-app](https://github.com/qulad/mac-haze-app) | Tauri v2 + Rust backend |
| [mac-haze-web](https://github.com/qulad/mac-haze-web) | Nuxt 3 + Vue 3 frontend |

## License

MIT
