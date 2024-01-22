
// create a getComputerChoice function to randomly select rock paper or scissors
// get inpu† from user - choices are : Rock, Paper, Scissors
//store inpu† in a variable
// make computer choose randomly between rock paper and scissors and return the resul
// play a single round by writing a function that has playerSelection and computerSelection
// as parameters.
// compare the input to declare winner

let choices = ["rock", "paper", "scissors"];
let random = Math.floor(Math.random() * choices.length);
choice = choices[random];

function getComputerChoice(choice) {
    return "Computer choose: " + choice;
}
getComputerChoice();
console.log(getComputerChoice(choice))


