import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "@fontsource/outfit";
import "@fontsource/roboto";
import '@fontsource/share-tech-mono';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const closedFaviconAnimation = [
  "assets/1.png",
  "assets/7.png"
];

const openedFaviconAnimation = [
  "assets/d.jpg"
];

const closedTitleFrames = [
  "★ Don't go🥺 ★",
  "☆ Come back?🥺 ☆"
];

const openedTitleFrames = [
  "Welcome back!"
];

let intervalId = null;

function animatedIcon(isTabOpened) {
  const faviconAnimation = isTabOpened ? openedFaviconAnimation : closedFaviconAnimation;
  const titleFrames = isTabOpened ? openedTitleFrames : closedTitleFrames;

  
  let index = 0;

  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    let link = document.getElementById("favicon");

    if (!link) {
      link = document.createElement("link");
      link.id = "favicon";
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.href = faviconAnimation[index % titleFrames.length];
    document.title = titleFrames[index % titleFrames.length];

    index++;
  }, 500);

  
}

function stopFaviconAnimation() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  // Reset to default favicon
  let link = document.getElementById("favicon");
  if (!link) {
    link = document.createElement("link");
    link.id = "favicon";
    link.rel = "icon";
    document.head.appendChild(link);
    document.title = "Dexter Lo";
  }
  link.href = "assets/d.png";
  document.title = "Dexter Lo";
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    animatedIcon(false);
  } else {
    //animatedIcon(true);
    stopFaviconAnimation();
  }
});