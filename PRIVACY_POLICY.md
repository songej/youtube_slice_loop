# Privacy Policy

Effective Date: 2025-08-06
Version: 1.1

---

## 1. Introduction
Slice & Loop for YouTube™ (Chrome extension) is committed to protecting your privacy. This Privacy Policy explains our practices regarding the data your browser stores when you use our extension.

## 2. Data We Do Not Collect or Transmit
We want to be crystal clear: we do NOT collect, store on our servers, or transmit any of the following data from you:
- Personal Identifiers: Your name, email address, IP address, or device identifiers.
- Browse Activity: Your Browse history, what you type, or the content of the pages you visit.

All extension activity and data processing occurs locally on your device.

## 3. Data Stored on Your Device
Our extension saves data exclusively in your browser's storage. This data is never sent to us or any third party. We use two types of browser storage for different purposes:

- Storage Type: Local Storage (chrome.storage.local)
  - Data Stored: YouTube Video ID and Segment Times
  - Purpose of Storage: Remembers the start and end times of the loops you create for a specific YouTube video, so your saved loops automatically load when you revisit that video. This data is not synced across your devices.

- Storage Type: Sync Storage (chrome.storage.sync)
  - Data Stored: Autoplay-Disable Preference
  - Purpose of Storage: Saves your choice for the “Always disable playlist autoplay” option. This setting is synced across all Chrome browsers where you are logged in with your Google account, providing a consistent experience.

## 4. User Rights and Data Control
You have complete control over the data stored by this extension. You can delete your data at any time:
1.  In-Extension Controls
    - Pressing the Q key deactivates the extension for the current video and removes its associated loop data (local storage).
    - Starting a new slicing session with the S key also clears previous loop data for that video (local storage).
    - You can change your “Autoplay Disable” preference (sync storage) at any time from the extension’s popup menu.
2.  Browser Controls
    - Uninstalling the extension from Chrome will permanently delete all of its stored data (local and sync).

## 5. Third-Party Sharing
We do NOT share, sell, rent, or otherwise disclose your data with any third parties, as we never have access to it.

## 6. Data Controller
For any inquiries regarding this policy, you can contact the data controller:
- Name: Eunjeong Song
- Email: songej.dev@gmail.com
- Address: Seoul, South Korea

## 7. Compliance
We adhere to the principles of major data-protection regulations, including:
- GDPR (EU General Data Protection Regulation)
- CCPA (California Consumer Privacy Act)

## 8. Changes to This Policy
We may update this policy from time to time. Notifications of changes will be published on our GitHub repository and will include the new “Effective Date” and version number.
GitHub repository: https://github.com/songej/youtube_slice_loop/

## 9. Contact Us
If you have questions or concerns about this Privacy Policy, please email us at songej.dev@gmail.com.
