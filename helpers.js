const delay = (duration, callback) => {
  setTimeout(() => {
    callback();
  }, duration);
};

function checkDelay() {
  let waitSound = new Audio("./sounds/wait.mp3");
  let counter = 0;

  let counterInterval = setInterval(() => {
    counter++;
    if (counter >= 50) {
      waitSound.play();
    }

    if (clicked && waitSound) {
      waitSound.pause();
      waitSound.currentTime = 0;
      clicked = false;

      clearInterval(counterInterval);
    }
  }, 1000);
}

function highlightMoney() {
  let moneyListItemNumber = document.querySelectorAll(".moneyListItemNumber");
  moneyListItemNumber.forEach((m) => {
    if (m.textContent == currentQuestion.id) {
      m.parentElement.classList.add("active");
      // earned = m.nextElementSibling.textContent;
    } else {
      m.parentElement.classList.remove("active");
    }
  });
}

class GameSetup {
  #showMoneyPyramid() {
    const moneyLevel = moneyPyramid
      .map((m) => {
        return `
            <li class='moneyListItem'>
            <span class="moneyListItemNumber">${m.id}</span>
            <span class="moneyListItemAmount">${m.amount}</span>
            </li>
        `;
      })
      .join("");
    moneyList.innerHTML = moneyLevel;
  }

  // play entrance sound on click of sabiText
  clickToStartInitialSound() {
    sabiText.addEventListener("click", () => {
      startGameSound.play();
    });
  }

  // start game on click of playGameBtn
  startGame() {
    playGameBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formInput.style.display = "none";
      playGameBtn.style.display = "none";
      delay(2000, () => {
        gameCenter.forEach((div) => {
          div.style.visibility = "visible";
        });
        sabiText.classList.add("sabiText");
        timerDOM.style.display = "none";
        startGameSound.pause();
        startGameSound.currentTime = 0;
        this.#showMoneyPyramid();
      });
    });
  }
}
