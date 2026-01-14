const workBtn = document.getElementById("worktop");
const playBtn = document.getElementById("playtop");
const aboutBtn = document.getElementById("abouttop");

function setActive(active) {
  [workBtn, playBtn, aboutBtn].forEach(el =>
    el.classList.remove("active")
  );
  active.classList.add("active");
}

function goWork() {
  window.scrollTo({ left: 0, behavior: "smooth" });
  setActive(workBtn);
}

function goPlay() {
  window.scrollTo({ left: window.innerWidth, behavior: "smooth" });
  setActive(playBtn);
}

function goAbout() {
  window.scrollTo({ left: window.innerWidth * 2, behavior: "smooth" });
  setActive(aboutBtn);
}

/* Rotate star on scroll */
const sun = document.getElementById("sun");

window.addEventListener("scroll", () => {
  const rotation = window.scrollY * 0.15;
  sun.style.transform = `rotate(${rotation}deg)`;
});

/* Reset on resize */
window.addEventListener("resize", () => {
  window.scrollTo(0, 0);
  setActive(workBtn);
});
