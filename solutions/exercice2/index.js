const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.style.background = randomBg();
});

function randomBg() {
  const hue = Math.floor(Math.random() * 361); // 0 à 360
  const saturation = Math.floor(Math.random() * 101); // 0 à 100%
  const lightness = Math.floor(Math.random() * 101); // 0 à 100%

  const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  return hsl;
}
