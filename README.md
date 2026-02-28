[English](#english) | [한국어](#한국어)

---

<br>

<h1 id="english">YouTube Chapter Controller 🎛️▶️</h1>

A lightweight, powerful Google Chrome Extension that allows you to seamlessly navigate back and forth between YouTube video chapters right from your browser toolbar.

Have you ever been taking notes, coding, or browsing on another tab, only to realize you need to re-watch a specific section of a YouTube tutorial playing in the background? Instead of switching tabs, hunting for the video player, and hovering over the tiny progress bar, you can now skip to the **Next** or **Previous** chapter with a single click from _any_ tab!

## ✨ Features

- **Cross-Tab Control:** Control your YouTube video's chapters from any active tab. If you have multiple YouTube tabs open, it intelligently prioritizes the one currently playing audio.
- **Accurate Navigation:** Extracts precise timestamp data directly from the video's description or metadata to ensure perfectly accurate seeks.
- **Video Navigation:** Jump to the next or previous video directly without opening YouTube.
- **Modern Minimalist UI:** A clean, zero-distraction popup that displays the current video title and chapter status.
- **Keyboard Shortcuts:**
  - `Cmd/Ctrl + Shift + Left/Right`: Skip chapters
  - `Cmd/Ctrl + Shift + Up/Down`: Skip to next/prev video
- **Built for Speed:** Written in Vanilla TypeScript and bundled with Vite for a lightning-fast footprint without heavy framework overheads.

## 🛠️ Tech Stack

- **JavaScript Ecosystem:** TypeScript
- **Build Tool:** Vite
- **Platform:** Chrome Extension V3 API (`activeTab`, `scripting`, `storage`)
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
4. Click the chapter / video buttons, or use keyboard shortcuts.

Enjoy a more productive, interruption-free video learning experience!

## 📝 License

This project is open-source and available under the MIT License.

<br><br><br>

---

<br>

<h1 id="한국어">YouTube Chapter Controller 🎛️▶️</h1>

브라우저 툴바에서 YouTube 영상의 챕터를 앞뒤로 매끄럽게 이동할 수 있게 해주는 가볍고 강력한 구글 크롬 확장 프로그램입니다.

다른 탭에서 노트를 작성하거나 코딩 또는 웹서핑을 하던 중 백그라운드에서 재생 중인 유튜브 튜토리얼의 특정 구간을 다시 봐야 할 때가 있었나요? 이제 탭을 전환하고 비디오 플레이어의 작은 진행률 표시줄에 마우스를 올릴 필요 없이, **어느 탭에서든** 클릭 한 번으로 **다음** 또는 **이전** 챕터/영상으로 바로 건너뛸 수 있습니다!

## ✨ 주요 기능

- **크로스 탭 컨트롤:** 열려 있는 어떤 탭에서든 유튜브 영상을 제어할 수 있습니다. 유튜브 탭이 여러 개 열려있는 경우 현재 오디오가 재생 중인 탭을 지능적으로 우선 인식합니다.
- **정확한 네비게이션:** 영상의 설명란 또는 메타데이터에서 직접 정확한 타임스탬프 데이터를 추출하여 완벽하게 해당 위치로 이동합니다.
- **영상 간 이동:** 확장 프로그램에서 유튜브 화면을 열지 않고도 바로 다음 또는 이전 영상으로 넘어갈 수 있습니다.
- **모던 미니멀 UI:** 방해 요소가 전혀 없고 현재 동영상 제목과 챕터 상태를 한눈에 보여주는 깔끔한 팝업.
- **단축키 지원:** 팝업을 열지 않고도 단축키만으로 조작 가능합니다!
  - `Cmd/Ctrl + Shift + Left/Right`: 챕터 이동
  - `Cmd/Ctrl + Shift + Up/Down`: 다음/이전 영상 이동
- **가볍고 빠른 구조:** 무거운 프레임워크 오버헤드 없이 바닐라 TypeScript로 작성되었으며 Vite로 번들링되어 번개처럼 빠릅니다.

## 🛠️ 기술 스택

- **JavaScript 생태계:** TypeScript
- **빌드 도구:** Vite
- **플랫폼:** Chrome Extension V3 API (`activeTab`, `scripting`, `storage`)
- **스타일:** Vanilla CSS (다크 모드 최적화)

---

## 🚀 설치 가이드

이 확장 프로그램은 아직 크롬 웹 스토어에 정식 출시되지 않았으므로 몇 가지 간단한 단계를 거쳐 로컬에 설치하실 수 있습니다:

### 사전 요구 사항

PC에 [Node.js](https://nodejs.org/en/)가 설치되어 있는지 확인해 주세요.

### 1. 클론 및 빌드

1. 터미널을 열고 프로젝트 폴더로 이동합니다.
2. 필요한 패키지를 설치합니다:
   ```bash
   npm install
   ```
3. 확장 프로그램 번들을 빌드합니다:
   ```bash
   npm run build
   ```
   _이 명령어를 실행하면 프로젝트 디렉토리에 컴파일된 파일들이 포함된 `dist` 폴더가 생성됩니다._

### 2. 크롬에 설치하기

1. 구글 크롬을 열고 확장 프로그램 페이지(`chrome://extensions/`)로 이동합니다.
2. 우측 상단에서 **개발자 모드**를 켭니다.
3. 좌측 상단의 **압축해제된 확장 프로그램을 로드합니다.** 버튼을 클릭합니다.
4. 1단계에서 생성된 `dist` 디렉토리를 선택합니다.
5. 🎉 **완료!** 이제 브라우저 툴바에서 "YouTube Chapter Controller" 아이콘을 확인하실 수 있습니다.

---

## 💡 사용 방법

1. 챕터가 포함된 유튜브 영상을 엽니다. (설명란 또는 재생바에 시간대가 표시된 영상)
2. 시청 중에 다른 탭을 열어서 자유롭게 웹서핑을 합니다.
3. 크롬 툴바에 있는 확장 프로그램 아이콘을 클릭합니다.
4. 챕터/영상 이동 버튼을 클릭하거나, 지정된 단축키를 활용하세요!

방해받지 않고 더욱 생산적인 비디오 학습 경험을 즐겨보세요!

## 📝 라이선스

이 프로젝트는 오픈 소스이며 MIT 라이선스에 따라 자유롭게 이용 가능합니다.
