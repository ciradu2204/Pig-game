

var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    //random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice1 = Math.floor(Math.random() * 6) + 1;
    // change the picture
    // first dice
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "./img/dice-" + dice + ".png";
    // second dice
    var diceDOM1 = document.querySelector(".dice1");
    diceDOM1.style.display = "block";
    diceDOM1.src = "dice-" + dice1 + ".png";

    if (dice !== 1 || dice1 !== 1) {
      roundScore = +dice + dice1;
      document.querySelector("#current-" + activePlayer).textContent =
        roundScore;
    } else {
      next();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  // add current score to the global score
  if (gamePlaying) {
    scores[activePlayer] += roundScore;

    //update score

    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // check the winner
    var winningPoint = document.querySelector("#input-score").value;
    if (scores[activePlayer] >= winningPoint) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".dice1").style.display = "none";
      document
        .querySelector(" .player-" + activePlayer + "-panel")
        .classList.add("winner");
      gamePlaying = false;
    } else {
      // next to other score
      next();
    }
  }
});

function next() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  roundScore = 0;
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".dice1").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector("#input-score").value = "";
  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document
    .querySelector(" .player-" + activePlayer + "-panel")
    .classList.remove("winner");
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".dice1").style.display = "none";
  document.querySelector(".dice").style.display = "none";
}
init();
