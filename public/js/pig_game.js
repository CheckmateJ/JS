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
    if(dice !== 1)
    {
        // add scores
        roundScore += dice;
        document.querySelector('#current-scores-' + activePlayer).textContent = roundScore;
        document.querySelector('.btn-hold').addEventListener('click', function() {
            scores[activePlayer] = roundScore;
            document.querySelector('#total-scores-' + activePlayer).textContent = scores[activePlayer];
        
        })
    }else 
    {
        roundScore = 0;
        // next player
        if(activePlayer === 0)
        {
            activePlayer = 1 ;
        }
        else
        {
            activePlayer = 0;
        }
    }
    
    diceDOM.src = "../img/dice-" + dice + ".png";

})
}));
