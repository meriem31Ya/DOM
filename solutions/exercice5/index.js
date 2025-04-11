// On sélectionne l'élément HTML avec l'ID "follower"
const follower = document.querySelector("#follower");

// Coordonnées de la souris (objectifs à atteindre)
let mouseX = 0;
let mouseY = 0;

// Coordonnées actuelles du "follower" (valeurs interpolées)
let currentX = 0;
let currentY = 0;

// Vitesse d'interpolation (plus petit = mouvement plus fluide/lent)
const speed = 0.1;

// À chaque mouvement de souris, on met à jour les coordonnées cibles
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Fonction qui anime le mouvement du "follower"
function animate() {
  // On rapproche progressivement currentX/Y de mouseX/Y
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  // On applique les nouvelles positions au style de l'élément
  follower.style.left = `${currentX}px`;
  follower.style.top = `${currentY}px`;

  // On redemande une nouvelle frame d'animation
  requestAnimationFrame(animate);
}

// Lancement de l'animation en boucle
animate();
