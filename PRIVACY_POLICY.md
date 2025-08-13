# PRIVACY POLICY

Effective Date: 2025-08-12
Version: 1.1.0

Our Promise: We do not collect, store, or share any of your personal data. Everything happens on your computer.

# 1. Introduction
This Privacy Policy explains how the “Slice & Loop for YouTube™” Chrome extension (“the extension”) handles data. Our commitment is simple: all processing happens locally on your device; we don’t collect or transmit your personal information.

What We Mean by "Personal Data": For this policy, "personal data" refers to any information that could be used to identify you, such as your name, email address, IP address, or unique device identifiers.

Scope: This policy covers the extension only. It does not cover YouTube or Google services, whose practices are governed by their own policies.

# 2. Data We Do Not Collect
We do not collect, store, sell, or share any of your personal data or Browse history. This also includes the slice data (start and end times) you create, which remains exclusively on your device. We have no access to your information. This includes, but is not limited to:

- Personal identifiers (e.g., name, email, IP address)
- Browse history (e.g., which websites you visit) or user activity
- YouTube viewing history
- Device identifiers, advertising IDs, analytics or diagnostics, crash reports

All functionality runs entirely within your browser.

# 3. Data Stored Locally on Your Device
The extension stores data only on your device via the Chrome Storage API. Nothing is sent to us or any third party.

To provide its features, the extension stores:

Data Category: Your Saved Slices
Storage Location: Your computer's local browser storage (`chrome.storage.local`)
Purpose: To save the start and end times of the video segments you create. This allows the extension to remember your slices when you revisit a video.

Data Category: Extension Security Key (salt)
Storage Location: Your synced browser storage (`chrome.storage.sync`)
Purpose: To save an Extension Security Key (salt) for hashing video identifiers, which is used for privacy. This key syncs across your logged-in devices to ensure a consistent experience.

Storage Details

The extension uses two types of local browser storage:

1. Local Storage (`chrome.storage.local`)
This is used to save data for specific videos on a single device.
Data Stored: Hashed video identifiers and the start/end times for each slice.
Purpose: To remember your saved slices when you revisit a video.
Data Retention: Data is automatically cleared if it's older than 30 days or if the total number of entries exceeds 3,000.
Storage Limit: Up to 5 MB. The extension will notify you when storage usage is high.

2. Sync Storage (`chrome.storage.sync`)
This is used to sync your general settings across all devices where you are logged into Chrome.
Data Stored: An Extension Security Key (salt) synced with your browser profile, used for hashing video identifiers.
Purpose: To provide a consistent experience on all your devices. Please note: only this Extension Security Key (salt) is synced, not your actual slice data. This ensures that if you use the extension on another device, the same video will have the same hashed identifier. Your saved slices for that video, however, will remain local to each device and are not synced.

# 4. Permissions and Purpose of Use
The extension requests only the permissions needed to operate:

- Host (`*://*.youtube.com/*`): Required to add features (slicing UI, hotkeys) directly to the YouTube video player. The permission is not used for tracking.
- Storage: To use the Chrome Storage API for saving your slices and preferences locally on your device.
- Alarms: To run periodic housekeeping tasks, such as clearing expired data from local storage.

# 5. User Control Over Your Data
You have full control over the data stored by the extension.

To Clear Slices for One Video:
1. Go to the YouTube video page.
2. Press the `Q` key. This will remove all slice data for that specific video.
(This affects only the current video's slices, regardless of their age.)

To Clear All Old Data:
1. When your local storage usage exceeds 90%, a "Clean Up Old Slices" button will appear in the extension popup.
2. Clicking this button will safely purge the oldest slice data to free up space.

To Remove All Data & Settings:
1. Uninstalling the extension automatically removes all of its data from your browser.
2. To clear the synced security key from your Google Account (this is an advanced step and typically not necessary), navigate to `chrome://settings/syncSetup`, find this extension under "Data from Chrome sync," and choose to clear its data.

# 6. Data Security
Even though nothing leaves your device, we take steps to protect locally stored data:
- Hashed Identifiers: To protect your privacy, video IDs are not stored in a readable format. Instead, they are converted into a non-reversible cryptographic hash using a random Extension Security Key (salt) unique to your browser profile. This means that even if someone could see the stored data, they could not easily tell which videos you have been watching.
- Local-Only Operations: The extension makes no external network requests. Your data never leaves your computer.

# 7. Third-Party Services and Data Sharing
We do not share, sell, or disclose your data to any third parties.

However, the extension operates on the YouTube™ platform and uses the Google Chrome™ Storage API, which are governed by their own privacy policies:
- Google Privacy Policy: https://policies.google.com/privacy
- YouTube Terms of Service: https://www.youtube.com/t/terms

The data you provide to these services (e.g., your Google account information, viewing history) is subject to their policies, not ours. Our extension does not access or transmit any of this account-level information.

# 8. Children’s Privacy
The extension is not directed to children under 13 and processes no personal data, consistent with COPPA.

# 9. Changes to This Policy
We may update this policy. We’ll update the Effective Date above and document changes in the project's official release notes.

# 10. Contact
Questions about this Privacy Policy:
- Name: Eunjeong Song
- Email: songej.dev@gmail.com
