const buttons = document.querySelectorAll(".filters button");
const images = document.querySelectorAll(".gallery img");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    images.forEach((img) => {
      if (category === img.dataset.category || category === "all") {
        img.removeAttribute("hidden");
      } else {
        img.setAttribute("hidden", "true");
      }
    });
  });
});
