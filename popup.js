document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('autoplay-toggle-option');

  function getMessageSafe(key, fallback = '') {
    const msg = chrome.i18n.getMessage(key);
    return msg || fallback || key;
  }

  // 다국어 메시지 렌더링
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.dataset.i18n;
    const text = getMessageSafe(key);
    if (text) el.textContent = text;
  }

  // 저장된 자동재생 설정 불러오기
  chrome.storage.sync.get('disableAutoplay', (res) => {
    toggle.checked = !!res.disableAutoplay;
  });

  // 자동재생 설정 저장
  toggle.addEventListener('change', () => {
    chrome.storage.sync.set({ disableAutoplay: toggle.checked }, () => {
      if (chrome.runtime.lastError) {
        console.warn('Failed to save autoplay setting:', chrome.runtime.lastError.message);
      }
    });
  });

  // 뱃지 초기화 (선택 사항)
  chrome.action.setBadgeText({ text: '' });
});
