const follower = document.querySelector("#follower");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.1; // plus petit = plus lent

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  follower.style.left = `${currentX}px`;
  follower.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}

animate();

//  version plus simple
const followerr = document.querySelector("#follower");

document.addEventListener("mousemove", (e) => {
  followerr.style.left = `${e.clientX}px`;
  followerr.style.top = `${e.clientY}px`;
});
