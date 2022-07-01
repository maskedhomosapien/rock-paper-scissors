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
 /* 
 funtion game { 
player points
computer points

 {use loops to play five rounds
takes input selection from user using prompt
and input selection from computer using computerPlay 
call the playRound to get outcome of each round
equate playRound to result to keep outcome
if result is a draw then dont add anything 
if outcome is equal to this result then add one point to the player points
else add one point to the computer points}

funtion to declare the winner 
if player is equal to computer points then its a tie
else if player is greater than the computer points then player wins
else computer wins
return the winner
    }
    */
function game() {
    playerPoints = 0;
    computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock Paper Scissors Shoot!!");
        let computerSelecion = computerPlay();
        let result = playRound();
        if (result == "it's a draw") {
            playerPoints && computerPoints;
        }else if(result == "You win! rock beats scissors.") {
            playerPoints++;
        }else if(result == "You win! scissors beats paper.") {
            playerPoints++;
        }else if(result == "You win! paper beats rock.") {
            playerPoints++;
        }else {
            computerPoints++;
        }

    }
}
  
  ;
  console.log(playRound(playerSelection, computerSelection));