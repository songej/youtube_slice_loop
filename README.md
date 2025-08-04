# YouTube Slice & Loop

The ultimate practice tool. Instantly slice and loop any part of a YouTube video with simple hotkeys.

This lightweight Chrome extension is designed for anyone who needs to practice a specific segment of a YouTube video repeatedly—musicians learning a difficult phrase, dancers mastering a choreography, or students reviewing a key lecture point. Its key feature is the ability to "slice" a video by setting a start point once (`S`) and then repeatedly defining end points (`E`), allowing for rapid, continuous section creation.

## ✨ Key Features

* **Intuitive Video Slicing**: Press `S` once to start, then press `E` repeatedly to chop a video into perfectly connected sections for practice.
* **Total Keyboard Control**: Control everything from slicing to looping (`R`) and navigation (`A`/`D`) without touching your mouse.
* **Playlist-Free Stable Mode**: Press `W` on a playlist video to reload it in a clean, standalone player for stable, interference-free practice.
* **Lightweight & Fast**: No bloat. Built to be fast and minimize browser load.

## 🚀 Installation

1.  Clone this repository or download it as a ZIP file and unzip it.
2.  Open Chrome, navigate to `chrome://extensions`.
3.  Enable **Developer mode** in the top right corner.
4.  Click **Load unpacked** and select the project folder.

## ⌨️ Hotkey Guide

| Key | Action | Description |
| :---: | :--- | :--- |
| **W** | **Enter Stable Mode** | **(On a playlist video)** Reloads the video without the playlist for stable looping. |
| **S** | **Start Slicing** | Sets the start time for your *first* slice. **This clears all existing sections.** |
| **E** | **End / Add Slice** | Sets the end time. **Pressing `E` again creates a new slice using the previous end point as the new start.** |
| **R** | **Start/Stop Looping** | Starts or stops looping the current slice. |
| **A** | **Previous Slice** | Jumps to the previous slice during looping. |
| **D** | **Next Slice** | Jumps to the next slice during looping. |
| **Q** | **Quit & Clear Slices** | Stops all looping and clears all defined slices. |

> **💡 Example: Slicing a music phrase**
>
> 1.  Find a video you want to practice with. Press **W** if it's in a playlist.
> 2.  Go to the beginning of the first phrase (`0:15`) and press **S**.
> 3.  At the end of the first phrase (`0:20`), press **E**. _(Slice 1: 0:15-0:20 created)_
> 4.  At the end of the second phrase (`0:24`), press **E** again. _(Slice 2: 0:20-0:24 created)_
> 5.  At the end of the third phrase (`0:29`), press **E** again. _(Slice 3: 0:24-0:29 created)_
> 6.  Now you have 3 slices. Press **R** to start looping the current one (Slice 3). Use **A** and **D** to navigate between Slice 1, 2, and 3.

## Credits

This extension's source code is licensed under the **MIT License**.

The "Repeat" icon used in this extension is from the Iconoir icon set and is licensed under the **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**.

- **Icon by:** [Iconoir](https://iconoir.com/)
- **Source:** [Iconfinder](https://www.iconfinder.com/icons/12539340/repeat_arrows_re_direction_sign_repeat_sign_icon)
