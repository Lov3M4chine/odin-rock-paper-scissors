let userScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
const options = ["Rock", "Paper", "Scissors"];
const playerSelectionPlaceholder = document.getElementById("player-selection-result");
const computerSelectionPlaceholder = document.getElementById("computer-selection-result");
const userScorePlaceholder = document.getElementById("user-score-count");
const computerScorePlaceholder = document.getElementById("computer-score-count");
const endGameMessage = document.getElementById("end-game-message");

function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomOption = options[randomIndex]
    computerSelection = randomOption;
}

function determineWinner() {
    if (playerSelection === computerSelection) {
        userScore++
        computerScore++
    }
    else if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock") 
        ){
        computerScore++
    } else {
        userScore++
    }
}

function displayUpdatedContent() {
    disableButtons();
    computerSelectionPlaceholder.textContent = "";
    playerSelectionPlaceholder.textContent = playerSelection;
    setTimeout(function() {
        computerSelectionPlaceholder.textContent = computerSelection;
    }, 3000);
    setTimeout(function() {
        userScorePlaceholder.textContent = userScore.toString();
        computerScorePlaceholder.textContent = computerScore.toString();
        enableButtons();
    }, 5000);
    ;
}

function checkEndGame() {
    setTimeout(function() {
        if (userScore === 5 && computerScore === 5) {
            disableButtons();
            endGameMessage.style.color = "black";
            endGameMessage.textContent = "It's a tie!";
        }
        else if (userScore === 5) {
            disableButtons();
            endGameMessage.style.color = "green";
            endGameMessage.textContent = "You win! Congratulations!";  
        }
        else if (computerScore === 5) {
            disableButtons();
            endGameMessage.style.color = "red"
            endGameMessage.textContent = "You've lost. Try again!";
        }
    }, 6000);
}

function reset() {
    userScore = 0;
    computerScore = 0;
    playerSelectionPlaceholder.textContent = "";
    computerSelectionPlaceholder.textContent = "";
    userScorePlaceholder.textContent = "";
    computerScorePlaceholder.textContent = "";
    endGameMessage.textContent = "";
}

function disableButtons() {
    const buttons = document.querySelectorAll('.selection');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function enableButtons() {
    const buttons = document.querySelectorAll('.selection');
    buttons.forEach(button => {
        button.disabled = false;
    });
}

// Allow user to select either rock paper scissors
document.getElementById("rockButton").addEventListener("click", function() {
    playerSelection = "Rock";
    getComputerChoice();
    determineWinner();
    displayUpdatedContent();
    checkEndGame();
});

document.getElementById("paperButton").addEventListener("click", function() {
    playerSelection = "Paper";
    getComputerChoice();
    determineWinner();
    displayUpdatedContent();
    checkEndGame();
});

document.getElementById("scissorsButton").addEventListener("click", function() {
    playerSelection = "Scissors";
    getComputerChoice();
    determineWinner();
    displayUpdatedContent();
    checkEndGame();
});

document.getElementById("reset-button").addEventListener("click", reset);


