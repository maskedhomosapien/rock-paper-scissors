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
return string that declares the winner of each round 

rock beats scissors
scissors beats paper
paper beat rock

funtion game and call playRound
use loops to play five rounds
 */
let computerPlay = function() {     
    let computerOptions = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random()* computerOptions.length);
    return computerOptions[random];
}
   
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "it's a draw";
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You win! rock beats scissors.";
    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You loose! rock beats scissors.";
    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You win! scissors beats paper.";
    }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You loose! scissors beats paper.";
    }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You win! paper beats rock.";
    }else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You loose! paper beats rock.";
    }else {
        return "No winner"
    }
  }
  
  const playerSelection = "Rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));