const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = "⏸️ Pausar música";
  } else {
    music.pause();
    playBtn.textContent = "🎶 Reproducir música";
  }
});

// Galería automática
const carousel = document.querySelector(".carousel");
let index = 0;

setInterval(() => {
  index = (index + 1) % carousel.children.length;
  carousel.style.transform = translateX(-${index * 100}%);
}, 3000);

// Corazones flotando
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);
