window.addEventListener("DOMContentLoaded", function () {
  let randomNumber;
  let tries;
  const bestScoreKey = "bestScore";

  const form = document.getquerySelector("#guess_form");
  const message = document.getElementById("message");
  const bestScoreDisplay = document.getquerySelector("#best-score");

  // Fonction pour initialiser ou redémarrer le jeu
  function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    tries = 1;
    console.log("Le nombre à deviner est :", randomNumber);
    message.textContent = "";
    form.reset();
  }

  // Charger le meilleur score depuis le localStorage
  function loadBestScore() {
    const bestScore = localStorage.getItem(bestScoreKey);
    if (bestScore !== null) {
      bestScoreDisplay.textContent = bestScore;
    }
  }

  // Soumission du formulaire
  function submitForm(event) {
    event.preventDefault();
    const guess = Number(form.guess.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      message.textContent = "⚠️ Entre un nombre valide entre 1 et 100";
      return;
    }

    if (guess < randomNumber) {
      message.textContent = `🔼 C'est plus grand ! Essai n°${tries}`;
      tries++;
    } else if (guess > randomNumber) {
      message.textContent = `🔽 C'est plus petit ! Essai n°${tries}`;
      tries++;
    } else {
      message.textContent = `🎉 Bravo ! Tu as trouvé en ${tries} essais !`;
      updateBestScore(tries);
      setTimeout(startGame, 3000); // Recommencer après 3 secondes
    }
  }

  // Mettre à jour le meilleur score si c'est une meilleure performance
  function updateBestScore(currentTries) {
    const bestScore = localStorage.getItem(bestScoreKey);
    if (!bestScore || currentTries < Number(bestScore)) {
      localStorage.setItem(bestScoreKey, currentTries);
      bestScoreDisplay.textContent = currentTries;
    }
  }

  // Initialisation
  loadBestScore();
  startGame();
  form.addEventListener("submit", submitForm);
});
