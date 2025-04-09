export const createModal = ({
  title = "Titre de la modale",
  description = "Description de la modale",
}) => {
  const modal = document.createElement("div");

  const overlay = document.createElement("div");
  overlay.className = "myui-modal-overlay";

  modal.className = "myui-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");

  modal.innerHTML = `
    <button class="myui-close-btn" aria-label="Fermer">&times;</button>
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const btnclose = modal.querySelector(".myui-close-btn");

  btnclose.addEventListener("click", (event) => {
    modal.remove();
    overlay.remove();
  });

  overlay.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target === overlay) {
      modal.remove();
      overlay.remove();
    }
  });
  window.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") {
        modal.remove();
        overlay.remove();
      }
    },
    { once: true }
  );
};
