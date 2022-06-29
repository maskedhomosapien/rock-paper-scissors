/*
UNDERSTAND THE PROJECT  
A single round game of rock paper scissors with computer
write function playRound that takes the parameter playerSelection and computerSelecion
players selection input should be case-insensitive
results of the function call should be returned 
write a new function game and call the the playRound function
keep score and report winner or looser at then end of the game
use prompt to get the input from the user.

BREAK DOWN THE PROJECT 
input selection from players
function computerPlay that return random selection from string array rock, paper and scissors

funtion playRound
return string that declares the winner

rock beats scissors
scissors beats paper
paper beat rock

funtion game and call playRound
use loops to play five rounds
 */

function playRound(playerSelection, computerSelection) {
    // your code here!

  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));