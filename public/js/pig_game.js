var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';


// if click new game - start game 
if(document.querySelector('.btn-new-game').addEventListener('click', function() {

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';

// start to count scores
document.querySelector('.btn-roll-dice').addEventListener('click', function(){
    
    // Random number
    dice = Math.floor(Math.random() * 6) + 1 ;

    // Display the result
    document.querySelector('#current-scores-' + activePlayer).textContent = dice;
    diceDOM.src = "../img/dice-" + dice + ".png";

})
}));
