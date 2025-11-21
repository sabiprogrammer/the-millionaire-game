const moneyList = document.querySelector(".moneyList");
const questionDOM = document.querySelector(".question");
const answersDOM = document.querySelector(".answers");
const mainDOM = document.querySelector(".main");
const pyramidDOM = document.querySelector(".pyramid");
const appDOM = document.querySelector(".app");
const audienceDOM = document.querySelector(".audience");
const fiftyFiftyDOM = document.querySelector(".fiftyFifty");
const phoneFriendDOM = document.querySelector(".phoneFriend");
const timerDOM = document.querySelector(".timer");
const playGameBtn = document.querySelector(".playGame");
const formInput = document.querySelector(".formInput");
const gameCenter = document.querySelectorAll(".gameCenter");
const form = document.getElementById("form");
const sabiText = document.querySelector("form h2");

const gameSetup = new GameSetup();

let startGameSound = new Audio("./sounds/entrance.mp3");

let clicked = false;
let questionIndex = 0;
let currentQuestion;

function loadQuestion() {
  // get questions and options to the screen
  currentQuestion = questionsData[questionIndex];

  // check if there are still questions to be answered
  if (questionIndex < questionsData.length && currentQuestion) {
    // play delay sound if no answer has been picked after 1 minute
    checkDelay();

    questionDOM.textContent = currentQuestion.question;
    const options = currentQuestion.options
      .map((option) => {
        return `<div class="answer"><span class="letter">${option.opt}</span>${option.text}</div>`;
      })
      .join("");

    answersDOM.innerHTML = options;

    //highlight the current price in the pyramid
    highlightMoney();

    // handle when user selects a particular option
    const optionsDOM = Array.from(document.querySelectorAll(".answer"));
    handleSelected(optionsDOM);
  } else {
    gameOver();
    console.log("Game Over");
  }
}

function handleSelected(options) {
  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      clicked = true;
      let selected = e.target;
      selected.classList.add("active");
      let correctAnswer = currentQuestion.correct;
      let userAnswer = selected.textContent.slice(2);

      //check if the user got the answer correct
      if (userAnswer === correctAnswer) {
        delay(3000, () => {
          new Audio("./sounds/correct.mp3").play();
          delay(500, () => selected.classList.add("correct"));
        });

        delay(8000, () => {
          questionIndex++;
          loadQuestion();
        });

        console.log("correct");
      } else {
        delay(3000, () => {
          selected.classList.add("incorrect");
          new Audio("./sounds/wrong.mp3").play();
        });

        delay(9000, () => gameOver());
        console.log("wrong");
      }
    });
  });
}

function gameOver() {
  mainDOM.style.display = "none";
  pyramidDOM.style.display = "none";
  sabiText.style.display = "none";
  moneyPyramid.reverse();

  // rewrite logic to get earned amount
  let earned = questionIndex > 0 ? moneyPyramid[questionIndex - 1].amount : "0";
  appDOM.innerHTML = `<h1 class="endText"> Game Over! You earned ${earned} points</h1>`;
  // appDOM.innerHTML = `<h1 class="endText"> Game Over! You earned &#8358;${earned}</h1>`;
}

const init = function () {
  gameSetup.clickToStartInitialSound();
  gameSetup.startGame();
  loadQuestion();
};
init();
