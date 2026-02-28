// src/background.ts

chrome.commands.onCommand.addListener(async (command) => {
  if (['next_chapter', 'prev_chapter', 'next_video', 'prev_video'].includes(command)) {
    try {
      // Find all YouTube watch tabs
      const tabs = await chrome.tabs.query({ url: "*://*.youtube.com/watch*" });
      
      if (tabs.length === 0) return;

      // Prefer the audible tab, otherwise fallback to the first found
      const targetTab = tabs.find(tab => tab.audible) || tabs[0];

      if (targetTab && targetTab.id) {
        chrome.tabs.sendMessage(targetTab.id, { action: command });

        // Record the time to tell the popup it was opened via shortcut
        await chrome.storage.local.set({ autoClosePopupTime: Date.now() });

        try {
          // If popup is already open, this will succeed and we reset its timer
          await chrome.runtime.sendMessage({ action: 'shortcut_pressed' });
        } catch (e) {
          // Popup is not open. Open it programmatically (requires Chrome 118+)
          if (typeof (chrome.action as any).openPopup === 'function') {
            try {
              await (chrome.action as any).openPopup();
            } catch (err) {
              console.log('Could not open popup:', err);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error sending message from background:', error);
    }
  }
});
