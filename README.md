# Slice & Loop for YouTube™

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Current Version](https://img.shields.io/badge/version-v1.1-green.svg)](https://github.com/songej/youtube_slice_loop/releases) [![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Available%20Now-blue.svg?logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore/detail/your-extension-id)

> **Status**: 🟢 Active | **Type**: 🧩 Chrome Extension | **Updated**: 📅 2025-08-06

## 📜 Abstract

Slice & Loop for YouTube™ is a browser utility engineered to enhance practice and learning efficiency on the YouTube platform. It provides users with a keyboard-driven interface to perform precise temporal slicing and looping of video segments. The core objective is to offer a streamlined workflow for detailed analysis and repetition, catering to users in disciplines requiring granular control over video playback, such as music, dance, and language studies. The implementation prioritizes minimal performance overhead and a robust, mouse-free user experience.

## 📺 Showcase

![Showcase](showcase.gif)

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

## 🧰 Tech Stack

- **JavaScript (Vanilla)**  
  Core logic is implemented using plain JavaScript (`background.js`, `content.js`, `popup.js`) to keep the bundle size minimal and avoid build dependencies.

- **HTML & CSS**  
  The popup interface is built with simple HTML and CSS (`popup.html`, `style.css`), as the UI is intentionally lightweight and does not require a reactive framework.

- **Chrome Extensions API (Manifest V3)**  
  Built using the latest Chrome Extensions standard for better performance and stricter permission handling.

- **i18n (Internationalization)**  
  Multi-language support is provided through the `_locales` system using structured JSON files (supporting 10+ languages).

> **Note:** This project does not use TypeScript or front-end frameworks like React. The extension is designed to be lightweight, dependency-free, and easy to maintain without a build step.  
> This approach also enables contributors to get started quickly without requiring additional tooling or configuration.

## 🚀 Installation

1.  Clone this repository or download and unzip the source code.
2.  Open the Chrome browser and navigate to `chrome://extensions`.
3.  Enable "Developer mode" via the toggle in the top-right corner.
4.  Click "Load unpacked" and select the project directory.

## ⌨️ Hotkey Reference

The operational workflow is entirely keyboard-driven for maximum efficiency.

| Key | Action | Description |
|:---:|:---|:---|
| **W** | **Enter Focus Mode** | For playlists: Reloads the video in a standalone player to prevent auto-advancing and ensure stable looping. |
| **S** | **Start Slicing** | Sets the start-time of the first segment. This action clears all previously defined segments. |
| **E** | **End / Add Slice** | Sets the end-time for the current segment. Subsequent presses create a new segment, using the previous end-point as the new start-point. |
| **R** | **Toggle Loop** | Activates or deactivates looping for the currently selected segment. |
| **A** | **Previous Slice** | Navigates to the preceding segment in the sequence. |
| **D** | **Next Slice** | Navigates to the subsequent segment in the sequence. |
| **Q** | **Quit & Clear** | Deactivates all extension functions and clears all defined segments from memory. |

## 🐛 Bug Reports & Feature Requests

Please submit bug reports or feature requests through the [GitHub Issues](https://github.com/songej/youtube_slice_loop/issues) page. Provide a detailed description of the issue or enhancement proposal.

## ✍️ Author

* **Eunjeong Song**
    * Homepage: [songej.com](https://songej.com)
    * LinkedIn: [songej](https://www.linkedin.com/in/songej)

## 🔗 Links

* **Chrome Web Store**: [Slice & Loop for YouTube™](https://chrome.google.com/webstore/detail/slice-loop-for-youtube/abc123def456ghi789jkl)
* **GitHub Repository**: [https://github.com/songej/youtube_slice_loop](https://github.com/songej/youtube_slice_loop)
* **Privacy Policy**: [Read our Privacy Policy](PRIVACY_POLICY.md)

## 📑 Version History

| Version | Date       | Key Changes                               |
|:--------|:-----------|:------------------------------------------|
| 1.1 | 2025-08-06 | Chrome Web Store initial release.         |
| 1.0 | 2025-08-04 | Initial project setup and core features.  |

## ⚖️ License & Acknowledgements

This project is licensed under the **[MIT License](LICENSE)**.

An icon used in this extension was created by **Iconoir** and sourced from [IconFinder](https://www.iconfinder.com/icons/12539340/repeat_arrows_re_direction_sign_repeat_sign_icon). It is used under the terms of the **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)** license.


---
*DISCLAIMER: Slice & Loop for YouTube™ is an independent project. It is not affiliated with, sponsored, endorsed, or in any way officially associated with YouTube or Google LLC. YouTube™ is a trademark of Google LLC, and its use is for reference purposes only, indicating compatibility with the service.*
