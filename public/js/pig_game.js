var scores, roundScore, activePlayer, dice, finishGame, doubleSix, dbSix;


doubleSix = 0;
dbSix = 0;
// finishGame = document.getElementById('number').value


document.querySelector('.dice').style.display = 'none';


function clear() {
    document.querySelector('.btn-roll-dice').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.dice').style.display = 'none';
}
clear();

function getValue() {
    finishGame = document.getElementById('number').value;
    alert(finishGame);
}

// getValue();

function newGame() {

    document.querySelector('#current-scores-0').textContent = 0;
    document.querySelector('#current-scores-1').textContent = 0;
    document.querySelector('#total-scores-0').textContent = 0;
    document.querySelector('#total-scores-1').textContent = 0;
    scores = [0, 0];
    document.querySelector('.btn-roll-dice').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.player-name-0').textContent = 'Player 1';
    document.querySelector('.player-name-1').textContent = 'Player 2';
    document.querySelector('.player-name-0').classList.remove('winner');
    document.querySelector('.player-name-1').classList.remove('winner');

}
newGame();

// if click new game - start game 
document.querySelector('.btn-new-game').addEventListener('click', newGame);

// start to count scores
document.querySelector('.btn-roll-dice').addEventListener('click', function() {

    // Random number    
    dice = Math.floor(Math.random() * 6 + 1);
    // check if dice = 6  twice in a row -  change player
    dice === 6 ? doubleSix += 6 : doubleSix = 0;
    if (dice === 6 && doubleSix === 12) {
        nextPlayer();
    }

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "../img/dice-" + dice + ".png";

    // Display the result
    // change player if dice = 1 or dice = 12
    if (dice !== 1 && doubleSix !== 12) {
        // add scores
        roundScore += dice;
        document.querySelector('#current-scores-' + activePlayer).textContent = roundScore;
        console.log(doubleSix)

    } else if (dice === 1) {

        // next player
        nextPlayer();
    }

});


function nextPlayer() {
    document.querySelector('#current-scores-' + activePlayer).textContent = 0;
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

// switch player and safe scores as total
document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    roundScore = 0;
    document.querySelector('#total-scores-' + activePlayer).textContent = scores[activePlayer];
    // if scores > 100  - finish game
    if (scores[activePlayer] >= finishGame) {
        document.querySelector('.player-name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.player-name-' + activePlayer).classList.add('winner');
        clear();
    }
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

});