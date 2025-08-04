# YouTube Slice & Loop

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Current Version](https://img.shields.io/badge/version-v1.0.1-green.svg)](https://github.com/songej/youtube_slice_loop/releases) [![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Coming%20Soon-blue.svg?logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore)

> **Status**: ☑️ Active ☐ Published ☐ Archived | **Type**: Chrome Extension | **Year**: 2025

## 📜 Abstract

> "The ultimate practice tool. Instantly slice and loop any part of a YouTube video with simple hotkeys."  

This document provides an overview of the "YouTube Slice & Loop" Chrome extension, a browser utility designed for the precise analysis and repetition of specific segments within YouTube videos. The primary objective of this tool is to enhance learning and practice efficiency for users such as musicians, dancers, and students by providing granular control over video playback via keyboard shortcuts. The implementation prioritizes performance and a streamlined, keyboard-driven user experience.

## 👥 Author

- **Eunjeong Song** (https://songej.com)

## 🔗 Links

- **Chrome Web Store**: *Link to be added upon publication*
- **GitHub Repository**: [https://github.com/songej/youtube_slice_loop](https://github.com/songej/youtube_slice_loop)
- **Developer Homepage**: [https://songej.com](https://songej.com)

## ✨ Core Functionality

* **Segment Slicing**: The extension enables users to define a sequence of continuous video segments. A starting point is marked with the `S` key, and subsequent presses of the `E` key define the end of one segment and the beginning of the next.
* **Keyboard-Driven Interface**: All primary functions, including segment definition (`S`, `E`), looping (`R`), and navigation between segments (`A`, `D`), are mapped to keyboard hotkeys to facilitate rapid, mouse-free operation.
* **Stable Mode for Playlists**: A dedicated function (`W` key) reloads a video from a playlist into a standalone player, mitigating playback interruptions caused by automatic progression to the next video.
* **Optimized Performance**: The extension is designed to be lightweight, ensuring minimal impact on browser performance.

## 🚀 Installation Procedure

1.  Clone this repository or download it as a ZIP file and unzip it.
2.  Open the Chrome browser and navigate to `chrome://extensions`.
3.  Enable "Developer mode" using the toggle in the top-right corner.
4.  Click the "Load unpacked" button and select the project directory.

## ⌨️ Hotkey Reference

| Key | Action | Description |
| :---: | :--- | :--- |
| **W** | **Enter Stable Mode** | **(On a playlist video)** Reloads the video without the playlist for stable looping. |
| **S** | **Start Slicing** | Sets the start time for the *first* slice. **This action clears all existing slices.** |
| **E** | **End / Add Slice** | Sets the end time for the current slice. **Subsequent presses create a new slice, using the previous end point as the new start point.** |
| **R** | **Start/Stop Looping** | Toggles the looping state for the currently active slice. |
| **A** | **Previous Slice** | Navigates to the previous slice in the sequence during looping. |
| **D** | **Next Slice** | Navigates to the next slice in the sequence during looping. |
| **Q** | **Quit & Clear Slices** | Deactivates all extension functions and clears all defined slices from memory. |

## 📑 Version History

| Version | Date | Description |
|:--------|:-----------|:------------|
| v1.0.0 | 2025-08-03 | Initial release. |
| v1.0.1 | 2025-08-04 | Code refactored for stability. |

---
*This document was last updated on August 4, 2025.*

📄 This project is licensed under the **[MIT License](LICENSE)**.

The "Repeat" icon used in this extension is from the Iconoir icon set and is licensed under the **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**.

- **Icon by:** [Iconoir](https://iconoir.com/)
- **Source:** [Iconfinder](https://www.iconfinder.com/icons/12539340/repeat_arrows_re_direction_sign_repeat_sign_icon)
