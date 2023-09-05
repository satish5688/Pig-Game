let dice = document.getElementById("dice");
let rollDice = document.querySelector(".btn-roll");
let newGame = document.querySelector(".btn-new");
let currentScore1 = document.getElementById("current-0");
let currentScore2 = document.getElementById("current-1");
let score0 = document.getElementById("score-0");
let score1 = document.getElementById("score-1");
let player0 = document.querySelector(".player-0");
let player1 = document.querySelector(".player-1");
let current = 0;
let scores = [0, 0];
let activePlayer = 0;

let switchPlayer = () => {
  current = 0;
  document.getElementById(`current-${activePlayer}`).textContent = current;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player-active");
  player1.classList.toggle("player-active");
};

let Rolling_dice = () => {
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove("hide");
  dice.src = `images/dice-${diceNumber}.png`;
  if (diceNumber != 1) {
    current += diceNumber;
    document.getElementById(`current-${activePlayer}`).textContent = current;
  } else {
    switchPlayer();
  }
};

let Hold = () => {
  scores[activePlayer] += parseInt(current);
  document.getElementById(`score-${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document.querySelector(`.name-${activePlayer}`).textContent = "Winner...!";
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.add("player-winner");
    document.querySelector(".btn-hold").classList.add("hide");
    document.querySelector(".btn-roll").classList.add("hide");
    dice.classList.add("hide");
  } else {
    switchPlayer();
  }
};

let New_Game = () => {
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.remove("player-winner");
  document.querySelector(`.name-${activePlayer}`).textContent = `player ${
    activePlayer + 1
  }`;

  document.querySelector(".btn-hold").classList.remove("hide");
  document.querySelector(".btn-roll").classList.remove("hide");
  dice.classList.add('hide')
  player0.classList.add("player-active");
  player1.classList.remove("player-active");
  current = 0;
  scores = [0, 0];
  activePlayer = 0;
};
