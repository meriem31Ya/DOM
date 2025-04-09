const cta = document.querySelector("button");
const btnclose = document.querySelector(".close-btn");
const dialog = document.querySelector("dialog");

cta.addEventListener("click", (event) => {
  dialog.showModal();
});
btnclose.addEventListener("click", (event) => {
  dialog.close();
});
