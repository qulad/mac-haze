# Roadmap

## Phase 0 — Foundation (complete)

- [x] Project setup: 3-repo structure (mac-haze, mac-haze-app, mac-haze-web)
- [x] `ProcessExecutor` trait — secure process abstraction, no shell injection
- [x] `TokioProcessExecutor` — real implementation with allowlist, kill-on-drop
- [x] macOS Keychain helper

## Phase 1 — SteamCMD Core (complete)

- [x] SteamCMD stdout parser (TDD, 8 unit tests)
- [x] `SteamCmdClient` trait + mockall automock
- [x] `RealSteamCmdClient` — login, Steam Guard 2FA, download, list owned apps
- [x] Onboarding saga state machine — login → API key → cross-validation → persist
- [x] Tauri commands: `onboarding_login`, `onboarding_submit_guard`, `onboarding_validate_api_key`, `onboarding_status`, `download_game`, `list_owned_apps`, `launch_game`

## Phase 2 — Nuxt Frontend (in progress)

- [ ] UX design (pending)
- [ ] Onboarding flow UI — login form, Steam Guard modal, API key input
- [ ] Library page — game grid with cover art
- [ ] Download page — progress bars, queue
- [ ] Friends page — online status, current game

## Phase 3 — Steam Web API Integration

- [ ] `useSteamApi` composable — library, friends, summaries
- [ ] Game cover art from Steam CDN
- [ ] Friends list with online/offline/in-game status
- [ ] Playtime display

## Phase 4 — Download & Launch

- [ ] Download queue management
- [ ] Real-time progress from Tauri events
- [ ] Wine game launcher with path picker
- [ ] Last-played tracking

## Phase 5 — Polish & Release

- [ ] Playwright E2E tests
- [ ] GitHub Actions CI
- [ ] GitHub Releases with `.dmg` artifact
- [ ] VitePress docs deployed to GitHub Pages
