//lists the options and computer makes a random choice//

function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  let item = array[Math.floor(Math.random()*array.length)];
  return item;
}
console.log(getComputerChoice());
//play a round of rock paper scissors
//give values to playerSelection and computerSelection
//compare all possible inputs and determine winner.
//print out winning or losing messages.
