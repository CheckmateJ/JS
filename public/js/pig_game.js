var scores, roundScore, activePlayer, dice, diceTwo, finishGame, secondDiceDoubleSix, dbSix;


doubleSix = 0;
secondDiceDoubleSix = 0;
finishGame = 100;


document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';


function clear() {
    document.querySelector('.btn-roll-dice').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}
clear();

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
    diceTwo = Math.floor(Math.random() * 6 + 1);

    if (dice === 6 && secondDiceDoubleSix === 6 || diceTwo === 6 && doubleSix === 6) {
        nextPlayer();
    }

    // check if dice = 6  twice in a row -  change player
    dice === 6 ? doubleSix += 6 : doubleSix = 0;
    diceTwo === 6 ? secondDiceDoubleSix += 6 : secondDiceDoubleSix = 0;
    if (dice === 6 && doubleSix === 12 || diceTwo === 6 && secondDiceDoubleSix === 12) {
        nextPlayer();
    }

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "../img/dice-" + dice + ".png";

    var diceTwoDOM = document.querySelector('.dice2');
    diceTwoDOM.style.display = 'block';
    diceTwoDOM.src = "../img/dice2-" + diceTwo + ".png";

    // Display the result
    // change player if dice = 1 or dice = 12
    if (dice !== 1 && doubleSix !== 12 && diceTwo !== 1 && secondDiceDoubleSix !== 12) {
        // add scores
        roundScore += dice;
        roundScore += diceTwo;
        document.querySelector('#current-scores-' + activePlayer).textContent = roundScore;

    } else if (dice === 1 || diceTwo === 1) {

        // next player
        nextPlayer();
    }

});


function nextPlayer() {
    document.querySelector('#current-scores-' + activePlayer).textContent = 0;
    roundScore = 0;
    doubleSix = 0;
    secondDiceDoubleSix = 0;
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

var numberOfTests = readline()

for (var i = 1; i <= numberOfTests; i++) {
    var ckw = readline()
    var [c, k, w] = ckw.split(' ')
    var answer = test(c, k, w) ? 'yes' : 'no'

    console.log(answer)
}

function test(c, k, w) {
    return c * w <= k
}