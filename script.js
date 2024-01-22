
// create a getComputerChoice function to randomly select rock paper or scissors
// get inpu† from user - choices are : Rock, Paper, Scissors
//store inpu† in a variable
// make computer choose randomly between rock paper and scissors and return the resul
// play a single round by writing a function that has playerSelection and computerSelection
// as parameters.
// compare the input to declare winner




function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    choice = choices[random];
    console.log(choice)
    return choice;
    
}



let playerSelection = prompt("Rock, Paper or Scissors?");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection)
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors"
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie! you both selected rock"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie! You both selected paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie! You both selected scissors"
    } else {
        return "Something is wrong!"
    }
}

console.log(playRound(playerSelection, computerSelection));


