# Contributing

## Repos

- **[mac-haze-app](https://github.com/qulad/mac-haze-app)** — Rust/Tauri backend work goes here
- **[mac-haze-web](https://github.com/qulad/mac-haze-web)** — Vue/Nuxt frontend work goes here
- **[mac-haze](https://github.com/qulad/mac-haze)** — docs and release notes only

## Setup

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/qulad/mac-haze-app.git
cd mac-haze-app

# Install Rust (if needed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install pnpm (if needed)
npm install -g pnpm

# Install JS dependencies
pnpm install

# Run Rust tests
cd src-tauri && cargo test

# Start dev
pnpm tauri dev
```

## Guidelines

- **Rust**: TDD — write tests first, then implementation. Tests live in `#[cfg(test)]` modules in the same file.
- **Vue**: Mock `useTauri` in Vitest tests. See [mac-haze-web/docs/TESTING.md](https://github.com/qulad/mac-haze-web/blob/main/docs/TESTING.md).
- **Security**: Never use `sh -c`. All process execution must go through `ProcessExecutor`.
- **No breaking changes** to the Tauri IPC bridge without updating [TAURI-BRIDGE.md](https://github.com/qulad/mac-haze-web/blob/main/docs/TAURI-BRIDGE.md).

## Pull Requests

- One concern per PR.
- Include test coverage for new behavior.
- Reference the relevant issue if one exists.
