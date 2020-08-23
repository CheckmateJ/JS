var scores, roundScore, activePlayer, dice, finishGame;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
finishGame = 20;


document.querySelector('.dice').style.display = 'none';


// if click new game - start game 
document.querySelector('.btn-new-game').addEventListener('click', function() {

    document.querySelector('#current-scores-0').textContent = 0;
    document.querySelector('#current-scores-1').textContent = 0;
    document.querySelector('#total-scores-0').textContent = 0;
    document.querySelector('#total-scores-1').textContent = 0;
    scores = [0, 0];

});

// start to count scores
document.querySelector('.btn-roll-dice').addEventListener('click', function() {

    // Random number    
    dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "../img/dice-" + dice + ".png";

    // Display the result
    // change player if dice = 1
    if (dice !== 1) {
        // add scores
        roundScore += dice;
        document.querySelector('#current-scores-' + activePlayer).textContent = roundScore;


    } else if (dice === 1) {

        // next player
        document.querySelector('#current-scores-' + activePlayer).textContent = 0;
        roundScore = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


    }

});


// switch player and safe scores as total
document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    roundScore = 0;
    document.querySelector('#total-scores-' + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] > finishGame) {
        alert('Player ' + (activePlayer + 1) + " won");
    }
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


});