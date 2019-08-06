/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying,lastDice ;

init();


document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {

        //random number
        
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random()* 6) + 1;
        // change the picture
        // first dice
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
       // second dice 
        var diceDOM1 = document.querySelector('.dice1');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';
         
        if(dice !== 1 || dice1 !==1){
           roundScore =+ dice + dice1;
           document.querySelector('#current-' + activePlayer).textContent = roundScore;
           
         } else{
            next();
        }
        // }else if (dice===6 && lastDice ===6){
        //      scores[activePlayer]=0;
        //      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //      next();
        // } else if (dice !== 1) {
        //     // add the score
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;

        // }else{
        //     // change the activePlayer
        //     next();


        // }
        // lastDice = dice;
    }




})


document.querySelector('.btn-hold').addEventListener('click', function () {
    // add current score to the global score
    if (gamePlaying) {

        scores[activePlayer] += roundScore;

        //update score

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // check the winner
        var winningPoint = document.querySelector('#input-score').value;
        if (scores[activePlayer] >= winningPoint) {

            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector(' .player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            // next to other score
            next();
        }

    }


})

function next() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('#input-score').value='';
    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector(' .player-' + activePlayer + '-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice').style.display = 'none';
}
init();