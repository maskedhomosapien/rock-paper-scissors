const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userScore_div = document.querySelector("#user-score");
const computerScore_div = document.querySelector("#computer-score");
const displayOutcome = document.querySelector(".display-outcome > p");
const playAgain = document.querySelector(".restart");
const user_badge = document.getElementById("user-label");
const computer_badge = document.getElementById("computer-label");
const displayResults = document.querySelector(".display-results")
let playerSelection = "";
let userScore = 0;
let computerScore = 0;
console.log(playAgain)


rock.addEventListener("click", function() {
    game("rock")
});
paper.addEventListener("click", function() {
    game("paper");
});
scissors.addEventListener("click", function( ) {
    game("scissors");
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

function game(playerSelection) {
        const playerSelection_div = document.getElementById(playerSelection);
        console.log(playerSelection_div);
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        displayOutcome.textContent = result;

        if (result == "it's a draw") {
            draw(playerSelection_div);
            userScore += 0;
            computerScore += 0;
        }else if(result == "You win! rock beats scissors.") {
            win(playerSelection_div);
        }else if(result == "You win! scissors beats paper.") {
            win(playerSelection_div);
        }else if(result == "You win! paper beats rock.") {
            win(playerSelection_div);
        }else if (result == "You loose! rock beats scissors.") {
            loose(playerSelection_div);
        }else if (result == "You loose! scissors beats paper.") {
            loose(playerSelection_div);
        }else if (result == "You loose! paper beats rock.") {
            loose(playerSelection_div);
        };

        decider(userScore, computerScore);
}

function win(playerSelection_div) {
    userScore += 1;
    userScore_div.textContent = userScore;
    playerSelection_div.classList.add("green-glow");
    user_badge.classList.add("green.glow");
    user_badge.style.backgroundColor = "green";
    computer_badge.style.backgroundColor = "red";
    setTimeout( () => {
        playerSelection_div.classList.remove("green-glow")
        user_badge.style.backgroundColor = "black";
        computer_badge.style.backgroundColor = "black";
    }, 400)
}

function loose(playerSelection_div) {
    computerScore += 1;
    computerScore_div.textContent = computerScore;
    playerSelection_div.classList.add("red-glow");
    user_badge.style.backgroundColor = "red";
    computer_badge.style.backgroundColor = "green";
    setTimeout( () => {
        playerSelection_div.classList.remove("red-glow")
        user_badge.style.backgroundColor = "black";
        computer_badge.style.backgroundColor = "black";
    }, 400)
}

function draw(playerSelection_div) {
    playerSelection_div.classList.add("gray-glow");
    user_badge.style.backgroundColor = "gray";
    computer_badge.style.backgroundColor = "gray";
    setTimeout( () => {
        playerSelection_div.classList.remove("gray-glow");
        user_badge.style.backgroundColor = "black";
        computer_badge.style.backgroundColor = "black";
    }, 400)
}


function decider() {
    console.log(userScore)
    if(userScore >= 6 && userScore > computerScore){
        displayResults.style.display = "none";
        playAgain.style.display = "block";
    }else if(computerScore >= 6 && computerScore  > userScore){
        playAgain.style.display = "flex";
        displayResults.style.display = "none";
    }
}

