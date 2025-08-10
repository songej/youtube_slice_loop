# Slice & Loop for YouTube™

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Release Version](https://img.shields.io/badge/version-v1.1.0-green.svg)](https://github.com/songej/youtube_slice_loop/releases) [![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Coming%20Soon-blue.svg?logo=google-chrome&logoColor=white)](#)

> Project Status: 🟢 Active | Type: 🧩 Chrome Browser Extension

## 1. Overview

Slice & Loop for YouTube™ is a browser extension engineered to enhance practice and learning efficiency on the YouTube platform. It provides a keyboard-driven interface for precise temporal slicing and repeating of video slices. A slice (aka segment/clip) is a user-defined portion of a video. It enables A-B repeat style practice by slicing and repeating video segments, while prioritizing a streamlined, mouse-free experience for music, dance, and language learning.

## 2. Key Features

- **Precision Slicing**: Define multiple, high-precision video slices with a single key press.
- **Keyboard-Centric Workflow**: All core functions are mapped to intuitive hotkeys (`S`, `E`, `R`, `A`, `D`, `Q`, `1-9`) for maximum efficiency.
- **Seamless Navigation & Repeat**: Instantly navigate and repeat slices with `A`/`D` keys. Toggle repeat mode with `R`. When a video with slices ends, repeat mode automatically starts from the first slice.
- **Playlist Stability (Focus Mode)**: A dedicated "Focus Mode" (`W` key) reloads a video from a playlist in a standalone player, preventing auto-play from interrupting repeat sessions.
- **Direct Slice Access**: Jump instantly to the first nine slices using number keys `1-9`.
- **Error-Preventing Design**: Incomplete slices are automatically discarded at the end of a video to prevent errors, ensuring a smooth transition into repeating.
- **Autoplay-Disable Toggle**: Conveniently turn off YouTube's "Up next" feature via the extension popup.
- **Data Persistence & Privacy**: Slices are auto-saved locally in the browser, hashed for privacy, and persisted for 30 days. The extension collects no personal data.
- **Lightweight & Performant**: Built with VanillaJS and the Manifest V3 standard for minimal impact on browser resources.

## 3. Getting Started

### Installation

**1. From Chrome Web Store (Recommended)**
- *Link will be available upon publication.*

**2. Manual Installation (for Developers)**
1.  Clone this repository or download and unzip the source code.
2.  Open Chrome and navigate to `chrome://extensions`.
3.  Enable "Developer mode" in the top-right corner.
4.  Click "Load unpacked" and select the project's root directory.

### Quick Start: Creating Your First Loop

1.  **Find a section** you want to practice and press the **`S`** key to **S**tart the slice.
2.  Let the video play to your desired endpoint and press the **`E`** key to **E**nd the slice.
3.  That's it! Now press the **`R`** key to **Repeat** your new loop.
4.  Created multiple slices? Use the **`A`** and **`D`** keys to **navigate** between them.

### Basic Usage

The workflow is designed to be efficient and entirely keyboard-driven.

| Key   | Action                   | Description                                                                  |
| :---- | :----------------------- | :--------------------------------------------------------------------------- |
| **S** | **Start slice** | Sets the start-time for a new slice.                                     |
| **E** | **End (Chain) slice** | Completes the current slice. Pressing `E` again immediately starts the next slice from where the last one ended (known as "chaining"). This enables rapid, back-to-back slicing. |
| **R** | **Toggle Repeat** | Starts or stops repeating through the defined slices.                    |
| **A/D** | **Previous / Next slice** | Moves to the previous (`A`) or next (`D`) slice and begins repeating automatically. |
| **1-9** | **Jump to slice** | Instantly jumps to a specific slice (1 through 9).                       |
| **Q** | **Clear all slices** | Deactivates all extension functions and clears all slices for the current video. |
| **W** | **Enter Focus Mode** | In playlists, reloads the video in a standalone view to prevent auto-advancing. |

## 4. Technical Architecture

This extension is built with a focus on performance, security, and maintainability, adhering to modern web standards without external framework dependencies.

- **Core Logic**: Vanilla JavaScript, compliant with the Manifest V3 standard.
- **State Management**: The background service worker (`background.js`) manages tab states and global settings, using `chrome.storage.session` for non-persistent data and `chrome.storage.sync` for user preferences. A robust reconciliation process ensures state consistency even after browser restarts.
- **DOM Interaction**: A single, unified `MutationObserver` monitors the YouTube player, with debouncing and filtering to minimize performance impact. DOM lookups are optimized via an `LRUCache`.
- **UI Components**: Toasts and overlays render in isolated Shadow DOM trees to prevent style conflicts with the host page.
- **Security**: Locally stored identifiers (video IDs) are hashed with a device-specific salt using the `SubtleCrypto` API. The extension makes no external network requests.
- **Asynchronous Processing**: Non-critical tasks are deferred using `requestIdleCallback`, and `async/await` is used for storage and messaging operations.

## 5. Technical Specifications

- **Slice & Storage Limits**:
  - Max Slices per Video: 50
  - Min Slice Duration: 0.5 seconds
  - Data Persistence: 30 days
  - Max Total Keys: 3,000
  - Storage Quota: 5MB (`chrome.storage.local`)
- **Performance & Optimization**:
  - MutationObserver Debounce: 150ms
  - Playlist Check Interval: 10s (foreground), 15s (background)
  - DOM Cache TTL: 30 seconds
- **Storage Cleanup**:
  - **Automatic Purge**: Runs every 60 minutes to clear expired data.
  - **User Notifications**:
    - A toast notification is shown when storage usage exceeds 75%.
    - A manual cleanup button appears in the popup when usage exceeds 90%.
- **Browser Compatibility**: Requires Chrome version 88+ for Manifest V3 support.

## 6. Project Information

- **Author**: Eunjeong Song ([Homepage](https://songej.com) / [LinkedIn](https://www.linkedin.com/in/songej))
- **Source Code**: https://github.com/songej/youtube_slice_loop
- **Privacy & Legal**:
  - **Privacy Policy**: [Read our Privacy Policy](PRIVACY_POLICY.md)
  - **License**: This project is licensed under the [PolyForm Noncommercial License 1.0.0](LICENSE). This software may be used, copied, modified, and distributed for noncommercial purposes only. Commercial use requires a separate license from the author.
  - **Disclaimer**: Slice & Loop for YouTube™ is an independent project and is not officially associated with YouTube or Google LLC. "YouTube" is a trademark of Google LLC.
- **Acknowledgements**: Icon by khulqi Rosyid from IconFinder (CC BY 4.0).
