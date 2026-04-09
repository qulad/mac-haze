# Installation

## Requirements

- macOS (Apple Silicon or Intel)
- [Homebrew](https://brew.sh) — installed automatically if missing

> Wine CrossOver is installed automatically on first launch. You don't need to install it yourself.

## Install

1. Download the latest `.dmg` from [GitHub Releases](https://github.com/qulad/mac-haze/releases).
2. Open the `.dmg` and drag **mac-haze** to your Applications folder.
3. Launch **mac-haze** from Applications.

## First Launch: Onboarding

On first launch, mac-haze walks you through a one-time setup:

### Step 1 — Steam Login

Enter your Steam username and password. mac-haze logs in via SteamCMD (not Steam's GUI).

If your account has **Steam Guard** enabled, you'll be prompted for the 2FA code sent to your email or authenticator app.

### Step 2 — Steam Web API Key

Paste your Steam Web API key. This unlocks:

- Library cover art and game names
- Friends list with online status
- Playtime statistics

**Get your API key:** [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey)

> The API key is stored securely in macOS Keychain. It never leaves your machine.

### Step 3 — Cross-Validation

mac-haze automatically verifies that your API key belongs to the same Steam account you logged into. If they don't match, you'll be prompted to re-enter one of them.

Once onboarding is complete, the main app opens.

## Updating

New versions are announced on GitHub Releases. Download the new `.dmg` and replace the app in Applications.
