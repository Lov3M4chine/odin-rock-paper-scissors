// Create score variables to store scores
let userScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = getComputerChoice();
const options = ["Rock", "Paper", "Scissors"];
// Have computer pick either rock paper scissors
function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomOption = options[randomIndex]
    return randomOption;
}
// Allow user to select either rock paper scissors
// Have computer display the users selection
// Have computer display the computers selection
// Calculate the winner
// Store the score
// Display a message declaring the winner with current score
// Display final message of winner after 5 rounds
