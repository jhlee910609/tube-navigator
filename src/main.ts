// Types
type ActionMessage = {
  action: 'prev_chapter' | 'next_chapter' | 'get_status';
};

type StatusResponse = {
  title: string | null;
  chapter: string | null;
  hasChapters: boolean;
};

// UI Elements
const titleEl = document.getElementById('video-title') as HTMLHeadingElement;
const chapterEl = document.getElementById('chapter-title') as HTMLParagraphElement;
const prevBtn = document.getElementById('prev-btn') as HTMLButtonElement;
const nextBtn = document.getElementById('next-btn') as HTMLButtonElement;

// Send Message
const sendMessage = async (message: ActionMessage, callback?: (response: StatusResponse) => void) => {
  try {
    // 1. Youbube 'watch' 페이지가 열려있는 탭을 모두 찾습니다.
    const tabs = await chrome.tabs.query({ url: "*://*.youtube.com/watch*" });
    
    if (tabs.length === 0) {
      updateUI(null);
      return;
    }

    // 2. 여러 개일 경우, 소리가 나고 있는(재생 중인) 탭을 우선적으로 선택합니다.
    const targetTab = tabs.find(tab => tab.audible) || tabs[0];

    if (targetTab && targetTab.id) {
      chrome.tabs.sendMessage(targetTab.id, message, (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          updateUI(null);
          return;
        }
        if (callback && response) callback(response);
      });
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

const updateUI = (status: StatusResponse | null) => {
  if (!status) {
    titleEl.textContent = 'Not a YouTube video';
    chapterEl.textContent = 'Navigate to a video to use chapters.';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  titleEl.textContent = status.title || 'YouTube Video';
  
  if (status.hasChapters) {
    chapterEl.textContent = status.chapter || 'Chapters available';
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  } else {
    chapterEl.textContent = 'No chapters found in this video.';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Request current status
  sendMessage({ action: 'get_status' }, updateUI);

  // Set up listeners
  prevBtn.addEventListener('click', () => {
    sendMessage({ action: 'prev_chapter' }, updateUI);
  });

  nextBtn.addEventListener('click', () => {
    sendMessage({ action: 'next_chapter' }, updateUI);
  });
});
