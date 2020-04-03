/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scoreboard,activeplayer,dice,roundscore,gamePlaying=true;
newGame();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
      //random number
          var dice=(Math.floor ( Math.random() * 6 ) + 1 );


      //display the result on dice and changing the dice img
          document.querySelector('.dice').style.display = 'block';
          document.querySelector('.dice').src = 'dice-' +dice+ '.png';
      //updating the result if the result is not 1
          if(dice !== 1){
              roundscore+=dice;
              document.querySelector('#current-' + activeplayer).textContent=roundscore;
          }else{

              nextPlayer();
          }
    }

});
        document.querySelector('.btn-hold').addEventListener('click',function(){
      if(gamePlaying){
        scoreboard[activeplayer] +=roundscore;
        document.querySelector('#score-' + activeplayer).textContent = scoreboard[activeplayer];


        if(scoreboard[activeplayer]>=100){
          document.querySelector('#name-' +activeplayer).textContent ='WINNER!!';
          document.querySelector('.dice').style.display = 'none';
          document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
          document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
          gamePlaying = false;
        }else{
            nextPlayer();
        }
      }
    });
function nextPlayer(){
  activeplayer === 0? activeplayer=1: activeplayer=0;
  roundscore=0;

  //in order to toggle the active class
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  //for making the current content 0 so that it starts with zero when its chance come
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;

  //for removing the dice when it is the chance of other player
  document.querySelector('.dice').textContent ='none';
};
document.querySelector('.btn-new').addEventListener('click',newGame);

 function newGame(){
   scoreboard = [0,0];
   activeplayer = 0;
   roundscore = 0;
   document.querySelector('.dice').style.display = 'none';
    //another method of selecting is selecting through getElementById ,,aur isme hash nah lagta.
    document.getElementById('score-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.getElementById('name-0').textContent ='Player 1';
    document.getElementById('name-1').textContent ='Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    };
