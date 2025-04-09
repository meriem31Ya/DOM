import { createModal } from "./components/modal.js";

const btn = document.querySelector("#launchModal");

btn.addEventListener("click", (event) => {
  console.log("clicked");
  createModal({
    title: "title",
    description: "description",
  });
});
