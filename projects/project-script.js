 /* Rotate star on scroll 
const sun = document.getElementById("sun");

window.addEventListener("scroll", () => {
  sun.style.transform = `rotate(${window.scrollY * 0.15}deg)`;
});
*/