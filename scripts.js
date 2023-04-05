// Create score variables to store scores
let userScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
const options = ["Rock", "Paper", "Scissors"];
const playerSelectionPlaceholder = document.getElementById("player-selection-result");
const computerSelectionPlaceholder = document.getElementById("computer-selection-result");
const userScorePlaceholder = document.getElementById("player-score");
const computerScorePlaceholder = document.getElementById("computer-score");

// Allow user to select either rock paper scissors
document.getElementById("rockButton").addEventListener("click", function() {
    playerSelection = "Rock";
    getComputerChoice();
    determineWinner();
    displayUpdatedContent();
});

document.getElementById("paperButton").addEventListener("click", function() {
    playerSelection = "Paper";
    playerSelectionPlaceholder.textContent = playerSelection;
    getComputerChoice();
    setTimeout(function() {
        computerSelectionPlaceholder.textContent = computerSelection;
    }, 3000);
});

document.getElementById("scissorsButton").addEventListener("click", function() {
    playerSelection = "Scissors";
    playerSelectionPlaceholder.textContent = playerSelection;
    getComputerChoice();
    setTimeout(function() {
        computerSelectionPlaceholder.textContent = computerSelection;
    }, 3000);
});

// Have computer pick either rock paper scissors
function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomOption = options[randomIndex]
    computerSelection = randomOption;
}


// Calculate the winner
// Store the score
function determineWinner() {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        userScore++
        computerScore++
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        userScore++
    }
}

function displayUpdatedContent() {
    playerSelectionPlaceholder.textContent = playerSelection;
    setTimeout(function() {
        computerSelectionPlaceholder.textContent = computerSelection;
    }, 3000);
    setTimeout(function() {
        userScorePlaceholder.textContent += userScore.toString();
        computerScorePlaceholder.textContent += computerScore.toString();
    }, 5000)
}



// Display a message declaring the winner with current score
// Display final message of winner after 5 rounds
