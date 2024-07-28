const logic = Math.trunc(Math.random() * 20) + 1;
let SecretNumber = logic;
let scoreNumber = 20;
let highscore = 0;

const scoreBoard = document.querySelector(".score");
const highScoreBoard = document.querySelector(".highscore");
const changeBackground = document.querySelector("body");
const guessNumber = document.querySelector(".number");

const contentMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    contentMessage("No numbers entered!");
  } else if (guess === SecretNumber) {
    contentMessage("You guessed the right number!");
    changeBackground.style.backgroundColor = "#60b347";
    guessNumber.textContent = SecretNumber;
    guessNumber.style.width = "30rem";

    if (scoreNumber > highscore) {
      highscore = scoreNumber;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== SecretNumber) {
    contentMessage(guess < SecretNumber ? "Too Low!" : "Too High!");
    scoreNumber--;
    scoreBoard.textContent = scoreNumber;
    if (scoreNumber === 1) {
      contentMessage("You Lost!");
      scoreBoard.textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  SecretNumber = logic;
  contentMessage("Start guessing...");
  scoreNumber = 20;
  scoreBoard.textContent = scoreNumber;
  changeBackground.style.backgroundColor = "#222";
  guessNumber.style.width = "15rem";
  guessNumber.textContent = "?";
  document.querySelector(".guess").value = "";
});
