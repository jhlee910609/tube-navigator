# YouTube Chapter Controller 🎛️▶️

A lightweight, powerful Google Chrome Extension that allows you to seamlessly navigate back and forth between YouTube video chapters right from your browser toolbar.

Have you ever been taking notes, coding, or browsing on another tab, only to realize you need to re-watch a specific section of a YouTube tutorial playing in the background? Instead of switching tabs, hunting for the video player, and hovering over the tiny progress bar, you can now skip to the **Next** or **Previous** chapter with a single click from _any_ tab!

## ✨ Features

- **Cross-Tab Control:** Control your YouTube video's chapters from any active tab. If you have multiple YouTube tabs open, it intelligently prioritizes the one currently playing audio.
- **Accurate Navigation:** Extracts precise timestamp data directly from the video's description or metadata to ensure perfectly accurate seeks.
- **Modern Minimalist UI:** A clean, zero-distraction popup that displays the current video title and chapter status.
- **Built for Speed:** Written in Vanilla TypeScript and bundled with Vite for a lightning-fast footprint without heavy framework overheads.

## 🛠️ Tech Stack

- **JavaScript Ecosystem:** TypeScript
- **Build Tool:** Vite
- **Platform:** Chrome Extension V3 API (`activeTab`, `scripting`)
- **Styles:** Vanilla CSS (Dark mode optimized)

---

## 🚀 Installation Guide

Since this extension is not yet published on the Chrome Web Store, you can manually install it locally in a few easy steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine.

### 1. Clone & Build

1. Open your terminal and navigate to the project folder.
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Build the extension bundle:
   ```bash
   npm run build
   ```
   _This will generate a `dist` folder in your project directory containing the compiled extension files._

### 2. Load into Chrome

1. Open Google Chrome and navigate to the Extensions page: `chrome://extensions/`
2. In the top right corner, toggle on **Developer mode**.
3. In the top left corner, click the **Load unpacked** button.
4. Select the `dist` directory that was generated in Step 1.
5. 🎉 **Done!** You should now see the "YouTube Chapter Controller" icon in your browser's toolbar.

---

## 💡 How to Use

1. Open a YouTube video that contains chapters (timestamps in the description or video timeline).
2. Open a new tab and start browsing (or stay on the YouTube tab—it works everywhere!).
3. Click the extension icon in your Chrome toolbar.
4. Click the **Next** `>` or **Previous** `<` buttons to instantly skip to the desired video section.

Enjoy a more productive, interruption-free video learning experience!

## 📝 License

This project is open-source and available under the MIT License.
