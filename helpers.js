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

const getAmountById = (id) => {
  const item = moneyPyramid.find(entry => entry.id === id);
  return item ? item.amount : null; // returns null if not found
};

/*
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
*/
function highlightMoney() {
  // highlight the question that was just answered (previous question),
  // not the current one being shown.
  const prevQuestion = questionIndex > 0 ? questionsData[questionIndex - 1] : null;
  const idToHighlight = prevQuestion ? prevQuestion.id : null;

  let moneyListItemNumber = document.querySelectorAll(".moneyListItemNumber");
  moneyListItemNumber.forEach((m) => {
    if (idToHighlight && m.textContent == idToHighlight) {
      m.parentElement.classList.add("active");
    } else {
      m.parentElement.classList.remove("active");
    }
  });
}
class GameSetup {
  #showMoneyPyramid() {
    const moneyLevel = moneyPyramid
    //   .map((m) => {
    //     return `
    //         <li class='moneyListItem ${[5, 10, 15].includes(m.id) ? "gurantee" : ""}'>
    //         <span class="moneyListItemNumber">${m.id}</span>
    //         <span class="moneyListItemAmount">${m.amount}</span>
    //         </li>
    //     `;
    .map((m) => {
        return `
            <li class='moneyListItem ${[5, 10, 15].includes(m.id) ? "gurantee" : ""}'>
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
      sabiText.style.display = "none";
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

// ***** LIFE LINE FUNCTIONALITY ***** //
class Lifeline {
  // ask the audience
  static useAskAudience() {
    audienceDOM.addEventListener("click", () => {
      delay(2000, () => {
        audienceDOM.src = "./images/audience-gone.png";
      });
      audienceDOM.style.pointerEvents = "none";
    });
  }

  // 50-50
  static useFiftyFifty() {
    fiftyFiftyDOM.addEventListener("click", () => {
      delay(1000, () => {
        fiftyFiftyDOM.src = "./images/50-50-gone.png";
      });

      // logic ->
      // 1. get the correct answer
      let correctAnswer = questionsData[questionIndex].correct;

      // 2. put all current options in an array
      let allOptions = Array.from(document.querySelectorAll(".answer"));

      // 3. create another array WITHOUT the correct answer being inside
      let removables = allOptions.filter(
        (option) => option.textContent.slice(2) != correctAnswer
      );

      // 4. access a random index of the above array and its content
      let randomNumber = removables[Math.floor(Math.random() * 3)];
      randomNumber = randomNumber.textContent.slice(2);

      // after 3s, loop through removables array,
      // apart from the content of the correct answer,
      // and the content of the random answer, set the remaining content to empty (-)

      delay(3000, () => {
        removables.forEach((item) => {
          if (
            item.textContent.slice(2) != correctAnswer &&
            item.textContent.slice(2) != randomNumber
          ) {
            // console.log(item.textContent.slice(2));
            item.textContent = " - ";
            item.style.pointerEvents = "none";
          }
        });
      });
      fiftyFiftyDOM.style.pointerEvents = "none";
    });
  }
  // phone a friend
  static usePhoneFriend() {
    phoneFriendDOM.addEventListener("click", () => {
      let counter = 60;

      // replace the phone friend icon 1s after click and show count down timer
      delay(1000, () => {
        phoneFriendDOM.src = "./images/phone-friend-gone.png";
        timerDOM.style.display = "flex";
        timerDOM.textContent = counter;
      });

      // begin to countdown
      delay(1000, () => {
        let timerInterval = setInterval(() => {
          timerDOM.textContent = counter;

          if (counter <= 0) {
            clearInterval(timerInterval);

            delay(3000, () => {
              timerDOM.style.display = "none";
            });
          }
          counter--;

          // stop count down if any option is clicked
          const optionsDOM = Array.from(document.querySelectorAll(".answer"));
          optionsDOM.forEach((opt) => {
            opt.addEventListener("click", () => {
              clearInterval(timerInterval);

              delay(3000, () => {
                timerDOM.style.display = "none";
              });
            });
          });
        }, 1000);
      });
      phoneFriendDOM.style.pointerEvents = "none";
    });
  }
}
