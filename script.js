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

let startGameSound = new Audio("./sounds/entrance.mp3");

timerDOM.style.display = "none";

let clicked = false;
let questionIndex = 0;
let currentQuestion;

// play entrance sound on click of sabiText
const clickToStartInitialSound = function(){
    sabiText.addEventListener("click", ()=>{
        startGameSound.play();
    });
}

// start game on click of playGameBtn
const startGame = function(){
    playGameBtn.addEventListener("click", e =>{
    e.preventDefault();
    formInput.style.display = "none";
    playGameBtn.style.display = "none";
    delay(2000, ()=>{
        gameCenter.forEach(div => {
            div.style.visibility = "visible";
        });
        sabiText.classList.add("sabiText");
        startGameSound.pause();
        startGameSound.currentTime = 0;
    });
});
}


const init = function(){
    clickToStartInitialSound();
    startGame();
}
init();
