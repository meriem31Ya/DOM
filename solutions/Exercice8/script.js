const images = [
  { src: "https://source.unsplash.com/200x150/?forest", category: "nature" },
  { src: "https://source.unsplash.com/200x150/?mountain", category: "nature" },
  { src: "https://source.unsplash.com/200x150/?city", category: "ville" },
  { src: "https://source.unsplash.com/200x150/?paris", category: "ville" },
  { src: "https://source.unsplash.com/200x150/?dog", category: "animaux" },
  { src: "https://source.unsplash.com/200x150/?cat", category: "animaux" },
];

const gallery = document.querySelector("#gallery");

// Génération des images dans la galerie
images.forEach((img) => {
  const imageElement = document.createElement("img");
  imageElement.src = img.src;
  imageElement.classList.add("gallery-item");
  imageElement.dataset.category = img.category;
  gallery.appendChild(imageElement);
});

// Gestion du filtrage
const buttons = document.querySelectorAll(".filters button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    document.querySelectorAll(".gallery-item").forEach((img) => {
      if (category === "all" || img.dataset.category === category) {
        img.classList.add("visible");
      } else {
        img.classList.remove("visible");
      }
    });
  });
});

// Afficher toutes les images au départ
document.querySelectorAll(".gallery-item").forEach((img) => {
  img.classList.add("visible");
});
