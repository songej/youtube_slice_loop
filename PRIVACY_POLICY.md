# Privacy Policy

Effective Date: 2025-08-07
Version: 1.1

---

## 1. Introduction
Slice & Loop for YouTube (Chrome extension) is committed to protecting your privacy. This Privacy Policy explains our practices regarding the data your browser stores when you use our extension.

## 2. Data We Do Not Collect or Transmit
We want to be crystal clear: we do not collect, store on our servers, or transmit any of the following data from you:
- Personal Identifiers: Your name, email address, IP address, or device identifiers
- Browse Activity: Your Browse history, keystrokes, or page contents

All extension activity and data processing occurs locally on your device.

## 3. Data Stored on Your Device
Our extension stores data exclusively in your browser's storage. This data is never transmitted to us or any third party.

We use two types of browser storage:

- Local Storage (chrome.storage.local)
  Data Stored: YouTube Video ID and segment start/end times
  Purpose: Remembers custom loop segments you've created for specific videos
  Retention: Data is automatically deleted after 30 days or if the number of entries exceeds 5,000

- Sync Storage (chrome.storage.sync)
  Data Stored: Autoplay-disable preference and loop activation state
  Purpose: Syncs your autoplay and loop settings across devices signed into your Google account

## 4. Extension Permissions and Purpose of Use
Our extension requires the `*://*.youtube.com/*` host permission to function correctly. Here is why this permission is necessary and how it is used:

- Purpose of Permission: This permission is essential for detecting the video player on a YouTube page, adding the necessary user interface for looping (e.g., the slice markers on the progress bar), and responding to hotkeys (like 'S', 'R', etc.).
- What We Don't Do With It: We never use this permission to track your viewing history, access your personal information, or interact with your YouTube account data. All functionality is processed locally within your browser and is strictly limited to the core features of the extension.

## 5. User Rights and Data Control
You have full control over your data. You can remove it using the following methods:

1. In-Extension Controls
   - Press Q: Clears loop data for the current video
   - Press S: Starts a new loop and removes existing loop data for the current video
   - Toggle autoplay preference via the popup UI

2. Browser Controls
   - Uninstalling the extension will permanently delete all stored data

## 6. Automatic Data Cleanup
To protect your privacy and conserve storage:
- Loop data older than 30 days is automatically deleted
- A maximum of 5,000 entries is enforced
- The extension performs periodic cleanup (typically hourly) using Chrome's alarms API

## 7. Third-Party Sharing
We do not share, sell, rent, or otherwise disclose your data with third parties. In fact, we never access your data at all.

## 8. Data Controller
For any inquiries regarding this policy:

Name: Eunjeong Song
Email: songej.dev@gmail.com
Address: Seoul, South Korea

## 9. Compliance
This extension is designed to comply with major data protection regulations:
- GDPR (EU General Data Protection Regulation)
- CCPA (California Consumer Privacy Act)

We do this by avoiding personal data collection and offering complete user control.

## 10. Changes to This Policy
We may update this policy from time to time. Changes will be reflected on our GitHub repository with a new version number and effective date.
GitHub: https://github.com/songej/youtube_slice_loop

## 11. Contact Us
If you have any questions about this Privacy Policy, please email: songej.dev@gmail.com
