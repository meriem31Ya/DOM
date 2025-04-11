# Exercices

# 💪 TP DOM JS — Interactions Progressives

Ce TP propose des exercices progressifs pour apprendre à manipuler le DOM en JavaScript. Chaque exercice introduit un nouveau concept ou une nouvelle interaction.

---

## 🟡 Exercice 1 : Manipulation simple du DOM

**Objectif :** Modifier des éléments HTML via JavaScript.

### HTML fourni :

```html
<section id="section1">
  <h2>Titre de Section 1</h2>
  <p id="para2">Je suis un paragraphe</p>
  <a href="#">Un lien</a>
</section>

<section id="section2">
  <h2>Titre de Section 2</h2>
  <p class="colorful">Texte coloré</p>
</section>
```

### Tâches :

- Mettre `para2` en bleu.
- Ajouter un border pointillé noir à `section2`.
- Mettre un fond orange à `.colorful`.
- Mettre le `h2` de `section1` en italique.
- Cacher l’élément `.colorful`.
- Modifier le texte de `para2` par "modified by JS".
- Changer le `href` du lien pour `https://www.lilo.org/`.
- Ajouter la classe `big-text` au `h2` de `section2`.

### Bonus :

- Mettre tous les paragraphes en italique.
- Faire apparaître les modifications progressivement avec `setTimeout()`.

---

## 🿱 Exercice 2 : Changer la couleur de fond dynamiquement

**Objectif :** Créer une fonction qui change dynamiquement la couleur de fond de la page.

### HTML fourni :

```html
<button id="btnColors">🎨 Changer le fond</button>
<span id="color">Couleur : </span>
```

### Instructions :

- Créer une fonction `randomBg()` qui retourne une couleur HSL aléatoire.
- Ajouter un événement sur le bouton pour changer la couleur de fond de la page.
- Afficher la couleur utilisée dans le `span#color`.

---

## ⚫ Exercice 3 : Activer un Dark Mode

**Objectif :** Permettre de passer en mode sombre avec un clic.

### HTML fourni :

```html
<button id="toggleDark">🌙 Dark Mode</button>
```

### CSS fourni :

```css
.dark-mode {
  background-color: #121212;
  color: #f1f1f1;
}
```

### Instructions :

- Ajouter un événement sur le bouton.
- Ajouter/retirer la classe `dark-mode` au `<body>` au clic.

### Bonus :

- Le restaurer au chargement de la page.

---

## 🔹 Exercice 4 : Afficher une modale

**Objectif :** Afficher une popup personnalisée. (soit avec une div ou bien avec la balise `dialog`)

### HTML fourni :

```html
<button id="openModal">Ouvrir la modale</button>
<div id="modal" class="hidden">
  <div class="modal-content">
    <span id="closeModal">&times;</span>
    <p>Ceci est une modale</p>
  </div>
</div>
```

### CSS fourni :

```css
.hidden {
  display: none;
}
#modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 5px;
}
```

### Instructions :

- Afficher la modale au clic sur le bouton.
- Cacher la modale au clic sur la croix.
- **Bonus :** fermer aussi en cliquant hors de la modale ou sur la touche Échap.

---

## 🔴 Exercice 5 : Cercle qui suit la souris (mousemove)

**Objectif :** Créer un cercle qui suit les mouvements de la souris.

### HTML fourni :

```html
<div id="follower"></div>
```

### CSS fourni :

```css
#follower {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: crimson;
  position: fixed;
  pointer-events: none;
  transition: transform 0.05s linear;
  transform: translate(-50%, -50%);
}
```

### Instructions :

- Faire en sorte que le cercle suive la souris (utiliser `mousemove`).
- **Bonus :** ajouter un décalage ou un effet de suivi.

---

## 🎯 Exercice 6 : Le juste prix

**Objectif :** Créer un petit jeu interactif où l'utilisateur doit deviner un nombre mystère.

### HTML fourni :

```html
<h1>🎯 Devine le prix !</h1>
<p>Un nombre entre 1 et 100 a été choisi au hasard. À toi de jouer !</p>
<form id="guess_form">
  <input
    name="guess"
    type="number"
    min="1"
    max="100"
    required
    placeholder="Entre un nombre"
  />
  <button type="submit">Valider</button>
</form>
<p id="message"></p>
<p>Meilleur score : <span id="best-score">--</span> essais</p>
```

### Instructions :

- Générer un nombre aléatoire entre 1 et 100 au chargement.
- Lors de la soumission du formulaire, comparer le nombre entré avec le nombre mystère.
- Afficher un message selon que le nombre est trop petit, trop grand, ou juste.
- Compter le nombre d’essais.
- Réinitialiser le jeu quand le bon nombre est trouvé.

---

## ✅ Exercice 7 : Todo List

**Objectif :** Ajouter/supprimer/barrer des tâches

### HTML fourni :

```html
<input type="text" id="todoInput" placeholder="Ajouter une tâche" />
<button id="addTodo">Ajouter</button>
<ul id="todoList"></ul>
```

### CSS fourni :

```css
.done {
  text-decoration: line-through;
  opacity: 0.6;
}
```

### Instructions :

- Ajouter une tâche en cliquant sur le bouton.
- Supprimer une tâche.
- La barrer en cliquant dessus.

---

## 🖼️ Exercice 8 : Galerie d’images filtrable

**Objectif :** Afficher une galerie d’images que l’on peut filtrer par catégorie.

### HTML fourni :

```html
<div id="filters">
  <button data-category="all">Tout</button>
  <button data-category="nature">Nature</button>
  <button data-category="animaux">Animaux</button>
  <button data-category="ville">Ville</button>
</div>

<div id="gallery">
  <img src="nature1.jpg" data-category="nature" alt="Nature" />
  <img src="chien.jpg" data-category="animaux" alt="Chien" />
  <img src="ville1.jpg" data-category="ville" alt="Ville" />
  <img src="nature2.jpg" data-category="nature" alt="Nature" />
  <img src="chat.jpg" data-category="animaux" alt="Chat" />
</div>
```

### CSS conseillé :

```css
#gallery img {
  width: 150px;
  margin: 10px;
  transition: transform 0.3s, opacity 0.3s;
}
#filters button.active {
  background-color: #333;
  color: white;
}
.hidden-img {
  opacity: 0;
  transform: scale(0.95);
  pointer-events: none;
}
```

### Instructions :

- Lorsque l’on clique sur un bouton, n’afficher que les images correspondantes à la catégorie.
- Le bouton "Tout" affiche toutes les images.
- Ajouter une classe `active` au bouton sélectionné.
- **Bonus :** animation douce à l’apparition/disparition des images.
- **Astuce :** parcourir toutes les images et ajouter ou retirer la classe `hidden-img` selon leur `data-category`.

---

**Bonne pratique :** Tester chaque exercice individuellement, comprendre le rôle de chaque étape, et personnaliser les variantes à votre façon.
