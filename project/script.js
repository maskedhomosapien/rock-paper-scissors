const rock = document.querySelector("#rock_div");
const paper = document.querySelector("#paper_div");
const scissors = document.querySelector("#scissors_div");
const displayOutcome = document.querySelector(".display-outcome > p");
const userScore_div = document.querySelector("#user-score");
const computerScore_div = document.querySelector("#computer-score");
const playAgain = document.querySelector(".restart")
let playerSelection = "";
let UserScore = 0;
let computerScore = 0;


rock.addEventListener("click", function() {
    playerSelection = "rock";
});
paper.addEventListener("click", function() {
    playerSelection = "paper";
});
scissors.addEventListener("click", function( ) {
    playerSelection = "scissors";
});


let computerPlay = function() {     
    let computerOptions = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random()* computerOptions.length);
    return computerOptions[random];
}
   
console.log(playerSelection)

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "it's a draw";
    }else if(playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! rock beats scissors.";
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You loose! rock beats scissors.";
    }else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! scissors beats paper.";
    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You loose! scissors beats paper.";
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! paper beats rock.";
    }else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You loose! paper beats rock.";
    }else if ( playerSelection !== "rock" || "paper" || "scissors") {
        return;
    }
  }

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = "";
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        
        if (result == "it's a draw") {
            UserScore += 0;
            computerPoints += 0;
        }else if(result == "You win! rock beats scissors.") {
            win();
        }else if(result == "You win! scissors beats paper.") {
            UserScore += 1;
        }else if(result == "You win! paper beats rock.") {
            UserScore += 1;
        }else if (result == "You loose! rock beats scissors.") {
            computerScore += 1;
        }else if (result == "You loose! scissors beats paper.") {
            computerScore += 1;
        }else if (result == "You loose! paper beats rock.") {
            computerScore += 1;
        }
        
        /* display UserScore and computerScore */
    };

        if (UserScore == computerScore) {
            return "It's a tie!";
        }else if (UserScore > computerPoints) {
            return "Player wins!";
        }else {
            return "Computer Wins";
        };
}

function win() {
    UserScore += 1;
    userScore_div.textContent = 10;
}

game();

    /* start game() function */

