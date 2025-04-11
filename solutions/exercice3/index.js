//  version simple
// const btn = document.getElementById("toggleDark");
// const body = document.body;

// btn.addEventListener("click", () => {
//   body.classList.toggle("dark-mode");
// });



//  dans le localstroage
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleDark");
  const body = document.body;

  if (!btn) {
    console.error("Bouton non trouvé !");
    return;
  }

  // Appliquer le thème enregistré
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  btn.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});
