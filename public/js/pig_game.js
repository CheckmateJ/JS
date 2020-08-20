var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;



document.querySelector('.btn-roll-dice').addEventListener('click', function(){
    // Random number

    dice = Math.floor(Math.random() * 6) + 1 ;

    // Display the result

    document.querySelector('#current-' + activePlayer).textContent = dice;


});
