const btn = document.getElementById("toggleDark");
const body = document.body;

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
