// src/background.ts

chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'next_chapter' || command === 'prev_chapter') {
    try {
      // Find all YouTube watch tabs
      const tabs = await chrome.tabs.query({ url: "*://*.youtube.com/watch*" });
      
      if (tabs.length === 0) return;

      // Prefer the audible tab, otherwise fallback to the first found
      const targetTab = tabs.find(tab => tab.audible) || tabs[0];

      if (targetTab && targetTab.id) {
        chrome.tabs.sendMessage(targetTab.id, { action: command });
      }
    } catch (error) {
      console.error('Error sending message from background:', error);
    }
  }
});
