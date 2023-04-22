const playerSelection = prompt("What's your choice?").toLowerCase();
const computerSelection = getComputerChoice();


//lists the options and computer makes a random choice//

function getComputerChoice() {
  let computerNumber = random(3);
  let computerGuess = '';

  switch (computerNumber) {
    case 1:
      computerGuess = "rock";
      break;
    case 2:
      computerGuess = "paper";
      break;
    case 3:
      computerGuess = "scissors";
      break;
    default:
      break;
  }
  return computerGuess;
}

//function that plays a single round against the computer
//prints a message declaring the winner.

function playRound(playerSelection, computerSelection) {
  let log = '';

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      log = "You lose! Paper beats rock";
    } else if (computerSelection === "scissors") {
      log = "You win! Rock beats scissors";
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      log = "You lose! Scissors beats paper";
    } else if (computerSelection === "rock") {
      log = "You win! Paper beats rock";
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      log = "You lose! Rock beats scissors";
    } else if (computerSelection === "paper") {
      log = "You win! Scissors beats paper";
    } else {
      log = "It's a tie";
    }
  }
  return log;
}

console.log(playRound(playerSelection, computerSelection));

function random(number) {
  return Math.floor(Math.random() * number + 1);
}

function game() {
  console.log(playRound(playerSelection, computerSelection));
}
game();
game();
game();
game();
game();



