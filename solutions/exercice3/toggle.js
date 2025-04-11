const toggle = document.getElementById("toggle-dark");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});
