// Mettre #para2 en bleu
document.querySelector("#para2").style.color = "blue";

// Ajouter un border pointillé noir à #section2
document.querySelector("#section2").style.border = "1px dotted black";

// Mettre un fond orange à .colorful
document.querySelector(".colorful").style.backgroundColor = "orange";

// Mettre le h2 de #section1 en italique
document.querySelector("#section1 h2").style.fontStyle = "italic";

// Cacher l’élément .colorful
document.querySelector(".colorful").style.display = "none";

// Modifier le texte de #para2
document.querySelector("#para2").textContent = "modified by JS";

// Changer le href du lien
document.querySelector("a").setAttribute("href", "https://www.lilo.org/");

// Ajouter la classe big-text au h2 de #section2
document.querySelector("#section2 h2").classList.add("big-text");

// BONUS : mettre tous les paragraphes <p> en italique
document.querySelectorAll("p").forEach((p) => {
  p.style.fontStyle = "italic";
});

// BONUS : faire apparaître .colorful après 2 secondes
setTimeout(() => {
  document.querySelector(".colorful").style.display = "block";
}, 2000);
