const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userScore_div = document.querySelector("#user-score");
const computerScore_div = document.querySelector("#computer-score");
const displayOutcome = document.querySelector(".display-outcome > p");
const playAgain = document.querySelector(".restart");
const user_badge = document.getElementById("user-label");
const computer_badge = document.getElementById("computer-label");
const displayResults = document.querySelector(".display-results");
const choices = document.querySelectorAll(".choices");
const gameCount__span = document.querySelector("#gameCount");
let gameCount = 5; 
console.log(gameCount)
console.log(choices)
let playerSelection = "";
let userScore = 0;
let computerScore = 0;
let stopCount = false;

rock.addEventListener("click", function() {
    game("rock")
});
paper.addEventListener("click", function() {
    game("paper");
});
scissors.addEventListener("click", function() {
    game("scissors");
});

playAgain.addEventListener("click", function(){
    restart();
})


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

function game(playerSelection,choices) {
        const playerSelection_div = document.getElementById(playerSelection);
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection); 

        if(!stopCount){
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
        gameCount -= 1;
        gameCount__span.textContent = `${gameCount}`
        decider(userScore, computerScore,gameCount);
        console.log(gameCount)
    }
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


function decider(userScore, computerScore) {
    if(gameCount == 0 && userScore > computerScore){
        playAgain.style.visibility = "visible";
        displayOutcome.textContent = "You won the Game!";
        stopCount = true;
    }else if(gameCount == 0 && computerScore > userScore){
        playAgain.style.visibility = "visible";
        displayOutcome.textContent = "You lost the Game";
        stopCount = true;
    }else if(gameCount == 0 && userScore == computerScore){
        playAgain.style.visibility = "visible";
        displayOutcome.textContent = "It's a draw!";
        stopCount = true
    }
}

function restart() {
    gameCount = 5;
    userScore = 0;
    computerScore = 0;
    console.log("yes")
    userScore_div.textContent = 0;
    computerScore_div.textContent = 0;
    playAgain.style.visibility = "hidden";
    stopCount = false;
}