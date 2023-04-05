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
const resetButton = document.getElementById("reset-button");

//determines a random selection of Rock, Paper, or Scissors from the options array
function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomOption = options[randomIndex]
    computerSelection = randomOption;
}

//determines the winner according to rock,paper,scissors rules - records the score in the proper variables
function determineWinner() {
    //if there is a tie, we add 1 to each score
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

//displays contents such as the player's selection, computers selection, and sets these on a timer so they don't all display at once. It also disables the buttons so the user can't click comtinuously causing bugs
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

//checks to see if the end game conditions have been met (score of 5), if so, it displays the proper message and enables the reset button
function checkEndGame() {
    setTimeout(function() {
        if (userScore === 5 && computerScore === 5) {
            disableButtons();
            endGameMessage.style.color = "black";
            endGameMessage.textContent = "It's a tie!";
            resetButton.classList.remove("hidden");
        }
        else if (userScore === 5) {
            disableButtons();
            endGameMessage.style.color = "green";
            endGameMessage.textContent = "You win! Congratulations!";
            resetButton.classList.remove("hidden"); 
        }
        else if (computerScore === 5) {
            disableButtons();
            endGameMessage.style.color = "red"
            endGameMessage.textContent = "You've lost. Try again!";
            resetButton.classList.remove("hidden");
        }
    }, 6000);
}

//a reset function to reset the game and clear the screen - only appears when the game has reached the end-game conditions
function reset() {
    userScore = 0;
    computerScore = 0;
    playerSelectionPlaceholder.textContent = "";
    computerSelectionPlaceholder.textContent = "";
    userScorePlaceholder.textContent = "";
    computerScorePlaceholder.textContent = "";
    endGameMessage.textContent = "";
    resetButton.classList.add("hidden")
}

//disables the buttons during timeout
function disableButtons() {
    const buttons = document.querySelectorAll('.selection');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

//enables buttoms after timeout
function enableButtons() {
    const buttons = document.querySelectorAll('.selection');
    buttons.forEach(button => {
        button.disabled = false;
    });
}

//event listener to determine if one of the user selections is made by clicking - if so, sets all of our functions into play
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


