// inject.ts runs in the context of the YouTube page (MAIN world)
// It accesses the global variable `document.getElementById('movie_player')`

interface YouTubePlayer extends Element {
    getDuration(): number;
    getCurrentTime(): number;
    seekTo(seconds: number, allowSeekAhead: boolean): void;
    // YouTube's internal API methods might not be fully documented, but we can look at the DOM or Chapters UI.
}

const sendStatus = () => {
    const titleEl = document.querySelector('h1.ytd-watch-metadata yt-formatted-string');
    
    let hasChapters = false;
    let currentChapter = null;

    // Check for chapters by looking at the YT player's chapter UI text
    const chapterEl = document.querySelector('.ytp-chapter-title-content');
    if (chapterEl && chapterEl.textContent) {
        hasChapters = true;
        currentChapter = chapterEl.textContent;
    } else {
        // Another way is to check if description has chapters, but UI is easiest.
        // If the container is present and visible:
        const container = document.querySelector('.ytp-chapter-container');
        if (container && window.getComputedStyle(container).display !== 'none') {
            hasChapters = true;
        }
    }

    const title = titleEl ? titleEl.textContent : document.title.replace(' - YouTube', '');

    window.postMessage({
        source: 'yt-chapter-controller-inject',
        type: 'status',
        payload: {
            title,
            chapter: currentChapter,
            hasChapters
        }
    }, '*');
};

const getChapterTimestamps = (): number[] => {
    const chapters = new Set<number>();
    // Look in description or engagement panels for timestamp links
    const links = document.querySelectorAll('#description a[href*="&t="], #description-inner a[href*="&t="], ytd-engagement-panel-section-list-renderer a[href*="&t="]');
    
    links.forEach(link => {
        try {
            const url = new URL((link as HTMLAnchorElement).href);
            const t = parseInt(url.searchParams.get('t') || '0', 10);
            if (!isNaN(t) && t >= 0) {
                chapters.add(t);
            }
        } catch(e) {}
    });
    
    let sorted = Array.from(chapters).sort((a, b) => a - b);
    
    // Fallback to internal player response data if available and no links found
    if (sorted.length === 0) {
        try {
            // @ts-ignore
            const response = window.ytInitialPlayerResponse;
            if (response && response.playerOverlayRenderer) {
                const markers = response.playerOverlayRenderer.decoratedPlayerBarRenderer?.decoratedPlayerBarRenderer?.playerBar?.multiMarkersPlayerBarRenderer?.markersMap?.[0]?.value?.chapters;
                if (markers) {
                    sorted = markers.map((m: any) => m.chapterRenderer.timeRangeStartMillis / 1000);
                }
            }
        } catch(e) {}
    }
    
    return sorted;
};

const navChapter = (direction: 'next' | 'prev') => {
    const video = document.querySelector('video') as HTMLVideoElement | null;
    if (!video) return;
    
    const currentTime = video.currentTime;
    const chapters = getChapterTimestamps();
    
    if (chapters.length === 0) {
        console.log("YouTube Chapter Controller: No chapter timestamps found.");
        return;
    }
    
    if (direction === 'next') {
        const next = chapters.find(t => t > currentTime + 1); // 1s buffer
        if (next !== undefined) {
            video.currentTime = next;
        }
    } else {
        // For previous, we need to sort descending
        const reversed = [...chapters].sort((a, b) => b - a);
        const prev = reversed.find(t => t < currentTime - 3); // 3s buffer to allow clicking prev twice quickly
        if (prev !== undefined) {
            video.currentTime = prev;
        } else {
            video.currentTime = 0; // go to start if at/before first chapter
        }
    }
    
    setTimeout(sendStatus, 150);
};

window.addEventListener('message', (event) => {
    if (event.source !== window || !event.data || event.data.source !== 'yt-chapter-controller-content') {
        return;
    }

    if (event.data.action === 'get_status') {
        sendStatus();
    }

    if (event.data.action === 'next_chapter') {
        navChapter('next');
    }

    if (event.data.action === 'prev_chapter') {
        navChapter('prev');
    }
});

// Initial status
sendStatus();
