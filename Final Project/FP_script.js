window.addEventListener("load", function () {
let comicPageIndex = 0;
let comicPanelIndex = 0;
const comicBook = document.querySelector(".comic-book");
const comicPages = document.querySelectorAll(".comic-book .page");
const resetBtn = document.getElementById("btn-reset");
const nextBtn = document.getElementById("btn-next");
const prevBtn = document.getElementById("btn-prev");
const startBtn = document.getElementById("btn-start");
const bgAudioEls = document.querySelectorAll(".BgAudios audio");
const effectAudioEls = document.querySelectorAll(
  ".EffectAudios audio:not(.btn-audio)"
);
const btnAudioEl = document.querySelector(
  ".EffectAudios audio.btn-audio.click"
);
const btnAudioHoverEl = document.querySelector(
  ".EffectAudios audio.btn-audio.hover"
);

function gotoComicPageNumber(n) {
  if (n > comicPages.length) n = comicPages.length;
  else if (n < 1) n = 1;
  comicPageIndex = n - 1;
  comicPages.forEach((el) => el.classList.remove("active"));
  comicPanelIndex = 0;
  comicPages[comicPageIndex].classList.add("active");
  if (n >= 1 && n < 4) playBgAudioNumber(2);
  else playBgAudioNumber(3);
}
function gotoComicPanelNumber(n) {
  const panelEls = comicPages[comicPageIndex].querySelectorAll(".panel");
  if (n > panelEls.length) n = panelEls.length - 1;
  else if (n < 1) n = 1;
  comicPanelIndex = n - 1;
  panelEls.forEach((el, i) => {
    if (i >= comicPanelIndex) {
      el.classList.remove("active");
    }
  });
  panelEls[comicPanelIndex].classList.add("active");
}
function nextComicPanel() {
  if (!comicPages[comicPageIndex]) return false;
  const panelEls = comicPages[comicPageIndex].querySelectorAll(".panel");
  if (comicPanelIndex < panelEls.length - 1) {
    comicPanelIndex++;
    gotoComicPanelNumber(comicPanelIndex + 1);
  } else {
    comicPanelIndex = 0;
    comicPageIndex++;
    gotoComicPageNumber(comicPageIndex + 1);
  }
  playBtnAudio();
  playEffectAudios();
}
nextBtn.addEventListener("click", nextComicPanel);
function prevComicPanel() {
  if (
    !comicPages[comicPageIndex] ||
    (comicPageIndex === 0 && comicPanelIndex === 0)
  )
    return false;
  let panelEls = comicPages[comicPageIndex].querySelectorAll(".panel");
  if (comicPanelIndex >= 1) {
    gotoComicPanelNumber(comicPanelIndex);
  } else {
    gotoComicPageNumber(comicPageIndex);
    panelEls = comicPages[comicPageIndex].querySelectorAll(".panel");
    comicPanelIndex = panelEls.length - 1;
  }
  playBtnAudio();
}
prevBtn.addEventListener("click", prevComicPanel);

function resetComicBook() {
  comicPageIndex = 0;
  comicPanelIndex = 0;
  comicPages.forEach((el) => {
    el.classList.remove("active");
    el.querySelectorAll(".panel").forEach((el) =>
      el.classList.remove("active")
    );
  });
  effectAudioEls.forEach(function (el) {
    el.pause();
  });
  playBtnAudio();
  gotoComicPageNumber(1);
}
resetBtn.addEventListener("click", resetComicBook);

function playBgAudioNumber(n) {
  bgAudioEls.forEach((el) => {
    el.volume = 0.7;
    el.loop = true;
    el.pause();
  });
  bgAudioEls[n - 1].play();
}
function playBtnAudio() {
  btnAudioEl.volume = 0.3;
  btnAudioEl.currentTime = 0;
  btnAudioEl.play();
}
function playEffectAudios() {
  let playIndex = null;
  if (comicPageIndex === 0 && comicPanelIndex === 1) {
    playIndex = 1;
  }
  if (comicPageIndex === 0 && comicPanelIndex === 2) {
    playIndex = 0;
  }
  if (comicPageIndex === 1 && comicPanelIndex === 3) {
    playIndex = 2;
  }
  if (comicPageIndex === 1 && comicPanelIndex === 4) {
    playIndex = 3;
  }
  if (comicPageIndex === 2 && comicPanelIndex === 1) {
    playIndex = 4;
  }
  if (comicPageIndex === 2 && comicPanelIndex === 4) {
    playIndex = 5;
  }
  if (comicPageIndex === 2 && comicPanelIndex === 5) {
    playIndex = 6;
  }
  if (comicPageIndex === 2 && comicPanelIndex === 6) {
    playIndex = 7;
  }
  if (comicPageIndex === 2 && comicPanelIndex === 8) {
    playIndex = 8;
  }
  if (comicPageIndex === 2 && comicPanelIndex === 11) {
    playIndex = 9;
  }
  if (comicPageIndex === 3 && comicPanelIndex === 1) {
    playIndex = 10;
  }
  if (comicPageIndex === 4 && comicPanelIndex === 1) {
    playIndex = 11;
  }
  if (comicPageIndex === 5 && comicPanelIndex === 2) {
    playIndex = 12;
  }
  if (comicPageIndex === 5 && comicPanelIndex === 3) {
    playIndex = 13;
  }
  if (comicPageIndex === 6 && comicPanelIndex === 4) {
    playIndex = 14;
  }
  if (comicPageIndex === 6 && comicPanelIndex === 5) {
    playIndex = 15;
  }
  if (comicPageIndex === 6 && comicPanelIndex === 8) {
    playIndex = 16;
  }
  if (comicPageIndex === 6 && comicPanelIndex === 12) {
    playIndex = 17;
  }
  if (comicPageIndex === 6 && comicPanelIndex === 14) {
    playIndex = 18;
  }
  if (comicPageIndex === 6 && comicPanelIndex === 15) {
    playIndex = 19;
  }
  if (comicPageIndex === 7 && comicPanelIndex === 1) {
    playIndex = 20;
  }
  if (comicPageIndex === 8 && comicPanelIndex === 2) {
    playIndex = 21;
  }
  if (comicPageIndex === 8 && comicPanelIndex === 4) {
    playIndex = 22;
  }
  if (comicPageIndex === 8 && comicPanelIndex === 6) {
    playIndex = 23;
  }
  if (comicPageIndex === 9 && comicPanelIndex === 0) {
    playIndex = 24;
  }
  if (comicPageIndex === 9 && comicPanelIndex === 2) {
    playIndex = 25;
  }
  if (comicPageIndex === 9 && comicPanelIndex === 3) {
    playIndex = 26;
  }
  if (comicPageIndex === 9 && comicPanelIndex === 4) {
    playIndex = 27;
  }
  if (comicPageIndex === 9 && comicPanelIndex === 5) {
    playIndex = 28;
  }
  if (comicPageIndex === 9 && comicPanelIndex === 6) {
    playIndex = 29;
  }
  if (comicPageIndex === 9 && comicPanelIndex === 6) {
    playIndex = 29;
  }
  if (comicPageIndex === 9 && comicPanelIndex === 9) {
    playIndex = 30;
  }
  if (comicPageIndex === 10 && comicPanelIndex === 1) {
    playIndex = 31;
  }
  if (comicPageIndex === 10 && comicPanelIndex === 2) {
    playIndex = 32;
  }
  if (comicPageIndex === 10 && comicPanelIndex === 3) {
    playIndex = 33;
  }
  if (comicPageIndex === 10 && comicPanelIndex === 4) {
    playIndex = 34;
  }
  if (comicPageIndex === 11 && comicPanelIndex === 1) {
    playIndex = 35;
  }
  if (comicPageIndex === 11 && comicPanelIndex === 2) {
    playIndex = 36;
  }
  if (comicPageIndex === 11 && comicPanelIndex === 4) {
    playIndex = 37;
  }
  if (comicPageIndex === 11 && comicPanelIndex === 5) {
    playIndex = 38;
  }
  if (comicPageIndex === 11 && comicPanelIndex === 7) {
    playIndex = 39;
  }
  if (comicPageIndex === 12 && comicPanelIndex === 2) {
    playIndex = 40;
  }
  if (comicPageIndex === 12 && comicPanelIndex === 5) {
    playIndex = 41;
  }
  if (comicPageIndex === 13 && comicPanelIndex === 2) {
    playIndex = 42;
  }
  if (comicPageIndex === 13 && comicPanelIndex === 4) {
    playIndex = 43;
  }
  if (comicPageIndex === 13 && comicPanelIndex === 7) {
    playIndex = 44;
  }
  if (comicPageIndex === 13 && comicPanelIndex === 8) {
    playIndex = 45;
  }
  if (comicPageIndex === 13 && comicPanelIndex === 8) {
    playIndex = 46;
  }
  if (comicPageIndex === 14 && comicPanelIndex === 1) {
    playIndex = 47;
  }
  if (comicPageIndex === 15 && comicPanelIndex === 0) {
    playIndex = 48;
    bgAudioEls.forEach((el) => {
      el.pause();
    });
  }
  if (playIndex === null) return false;
  effectAudioEls.forEach(function (el) {
    el.pause();
    el.currentTime = 0;
  });
  effectAudioEls[playIndex].play();
}
startBtn.addEventListener("click", function () {
  const loaderEl = document.querySelector(".loader-container");
  document.querySelector(".start-screen").style.display = "none";
  document.querySelector(".footer-row").style.display = "block";
  loaderEl.style.animationDuration = "5s";
  loaderEl.classList.add("active");
  playBtnAudio();
  playBgAudioNumber(1);
  setTimeout(() => {
    gotoComicPageNumber(1);
  }, 4000);
});

function playBtnHoverAudio() {
  btnAudioHoverEl.pause();
  btnAudioHoverEl.currentTime = 0;
  btnAudioHoverEl.play();
}
nextBtn.addEventListener("mouseenter", playBtnHoverAudio);
prevBtn.addEventListener("mouseenter", playBtnHoverAudio);
resetBtn.addEventListener("mouseenter", playBtnHoverAudio);
startBtn.addEventListener("mouseenter", playBtnHoverAudio);
});