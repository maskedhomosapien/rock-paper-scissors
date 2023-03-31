const rock = document.querySelector("#rock_div");
const paper = document.querySelector("#rock_div");
const scissors = document.querySelector("#rock_div");
const displayOutcome = document.querySelector(".display-outcome > p");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const playAgain = document.querySelector(".restart")



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
    }else if (playerSelection !== String){
        console.log("Please enter your choice");
    } else if ( playerSelection !== "rock" || "paper" || "scissors") {
        return;
    }
  }

function game() {
    playerPoints = 0;
    computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = "";
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        
        if (result == "it's a draw") {
            playerPoints += 0;
            computerPoints += 0;
        }else if(result == "You win! rock beats scissors.") {
            playerPoints += 1;
        }else if(result == "You win! scissors beats paper.") {
            playerPoints += 1;
        }else if(result == "You win! paper beats rock.") {
            playerPoints += 1;
        }else if (result == "You loose! rock beats scissors.") {
            computerPoints += 1;
        }else if (result == "You loose! scissors beats paper.") {
            computerPoints += 1;
        }else if (result == "You loose! paper beats rock.") {
            computerPoints += 1;
        }
        
        /* display playerPoints and computerPoints */
    };

        if (playerPoints == computerPoints) {
            return "It's a tie!";
        }else if (playerPoints > computerPoints) {
            return "Player wins!";
        }else {
            return "Computer Wins";
        };
}
    let computerSelection = computerPlay();
    let playerSelection = "rock";
    /* start game() function */