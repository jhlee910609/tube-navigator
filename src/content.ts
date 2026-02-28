// content.ts listens for messages from the popup and communicates with the injected script.

// 1. Inject the script to gain access to the MAIN world (YouTube's movie_player object)
const script = document.createElement('script');
script.src = chrome.runtime.getURL('src/inject.js');
script.onload = () => {
    script.remove();
};
(document.head || document.documentElement).appendChild(script);

// 2. State & message handling
let currentStatus = {
    title: null as string | null,
    chapter: null as string | null,
    hasChapters: false
};

// Listen for messages from the inject script
window.addEventListener('message', (event) => {
    // We only accept messages from ourselves
    if (event.source !== window || !event.data || event.data.source !== 'yt-chapter-controller-inject') {
        return;
    }

    if (event.data.type === 'status') {
        currentStatus = event.data.payload;
    }
});

// Request status periodically from the inject script to keep our state fresh
setInterval(() => {
    window.postMessage({ source: 'yt-chapter-controller-content', action: 'get_status' }, '*');
}, 1000);

// 3. Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    if (request.action === 'get_status') {
        // Trigger a fresh status update, then return the current one
        window.postMessage({ source: 'yt-chapter-controller-content', action: 'get_status' }, '*');
        
        // Use a short timeout to let the page respond, or just return cached status
        setTimeout(() => sendResponse(currentStatus), 50);
        return true; // Indicates async response
    }
    
    if (request.action === 'next_chapter') {
        window.postMessage({ source: 'yt-chapter-controller-content', action: 'next_chapter' }, '*');
        setTimeout(() => sendResponse(currentStatus), 50);
        return true;
    }
    
    if (request.action === 'prev_chapter') {
        window.postMessage({ source: 'yt-chapter-controller-content', action: 'prev_chapter' }, '*');
        setTimeout(() => sendResponse(currentStatus), 50);
        return true;
    }
});
