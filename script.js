const musica = document.getElementById("musica");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

musica.addEventListener("loadedmetadata", () => {
  progress.max = musica.duration;
});

playBtn.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    playBtn.innerText = "⏸";
  } else {
    musica.pause();
    playBtn.innerText = "▶";
  }
});

musica.addEventListener("timeupdate", () => {
  progress.value = musica.currentTime;
});

progress.addEventListener("input", () => {
  musica.currentTime = progress.value;
});

musica.addEventListener("ended", () => {
  playBtn.innerText = "▶";
  progress.value = 0;
});
