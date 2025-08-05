# YouTube Slice & Loop

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Current Version](https://img.shields.io/badge/version-v1.0.1-green.svg)](https://github.com/songej/youtube_slice_loop/releases) [![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Coming%20Soon-blue.svg?logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore)

> **Status**: ☑️ Active | **Type**: Chrome Extension | **Updated**: 2025-08-06

## 📜 Abstract

YouTube Slice & Loop is a browser utility engineered to enhance practice and learning efficiency on the YouTube platform. It provides users with a keyboard-driven interface to perform precise temporal slicing and looping of video segments. The core objective is to offer a streamlined workflow for detailed analysis and repetition, catering to users in disciplines requiring granular control over video playback, such as music, dance, and language studies. The implementation prioritizes minimal performance overhead and a robust, mouse-free user experience.

## 🌟 Showcase

*(A brief GIF or video demonstrating the slicing and looping process is recommended here for optimal user comprehension.)*

## ✨ Key Features

* **Temporal Segment Slicing**: Users can define a sequence of video segments (slices) with single key presses, allowing for rapid and precise isolation of desired content.
* **Keyboard-Centric Interface**: All core functionalities are mapped to keyboard shortcuts (`S`, `E`, `R`, `A`, `D`, `Q`, `W`), eliminating the need for mouse interaction and enabling an efficient workflow.
* **Playlist Stability (Focus Mode)**: A dedicated "Focus Mode" (`W` key) reloads a video from a playlist in a standalone player. This critical feature prevents YouTube's auto-play from interrupting loop sessions.
* **Seamless Navigation**: Users can navigate between defined slices (`A`/`D` keys) forwards and backward instantly.
* **Lightweight & Performant**: Designed to be a lightweight extension with minimal impact on browser resources.

## 👥 Target Audience

This extension is designed for individuals who benefit from the detailed and repetitive study of video material. Use cases include:

* **🎶 Musicians**: Mastering complex musical phrases or transcribing solos.
* **💃 Dancers**: Drilling and perfecting specific choreographic sequences.
* **🗣️ Language Learners**: Isolating and repeating spoken content for pronunciation and comprehension.
* **🎬 Content Creators & Educators**: Creating clips and reviewing material for tutorials or lectures.

## 🚀 Installation

1.  Clone this repository or download and unzip the source code.
2.  Open the Chrome browser and navigate to `chrome://extensions`.
3.  Enable "Developer mode" via the toggle in the top-right corner.
4.  Click "Load unpacked" and select the project directory.

## ⌨️ Hotkey Reference

The operational workflow is entirely keyboard-driven for maximum efficiency.

| Key | Action | Description |
|:---:|:---|:---|
| **W** | **Enter Focus Mode** | **For playlists:** Reloads the video in a standalone player to prevent auto-advancing and ensure stable looping. |
| **S** | **Start Slicing** | Sets the start-time of the first segment. **This action clears all previously defined segments.** |
| **E** | **End / Add Slice** | Sets the end-time for the current segment. Subsequent presses create a new segment, using the previous end-point as the new start-point. |
| **R** | **Toggle Loop** | Activates or deactivates looping for the currently selected segment. |
| **A** | **Previous Slice** | Navigates to the preceding segment in the sequence. |
| **D** | **Next Slice** | Navigates to the subsequent segment in the sequence. |
| **Q** | **Quit & Clear** | Deactivates all extension functions and clears all defined segments from memory. |

## 🐛 Bug Reports & Feature Requests

Please submit bug reports or feature requests through the [GitHub Issues](https://github.com/songej/youtube_slice_loop/issues) page. Provide a detailed description of the issue or enhancement proposal.

## 🔗 Links

* **Chrome Web Store**: *To be added upon publication*
* **GitHub Repository**: [https://github.com/songej/youtube_slice_loop](https://github.com/songej/youtube_slice_loop)
* **Developer Homepage**: [https://songej.com](https://songej.com)

## 📑 Version History

| Version | Date       | Description                       |
|:--------|:-----------|:----------------------------------|
| v1.0.0  | 2025-08-04 | Initial release.                  |
| v1.0.1  | 2025-08-05 | Code refactored for stability.    |


## ⚖️ License & Acknowledgements

This project is licensed under the **[MIT License](LICENSE)**.

The "Repeat" icon is from the [Iconoir](https://www.iconfinder.com/icons/12539340/repeat_arrows_re_direction_sign_repeat_sign_icon) set, licensed under **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**.

---
*This document was last updated on August 6, 2025.*
