
let playerScore = 0;
let computerScore = 0;



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
      computerScore++;
    } else if (computerSelection === "scissors") {
      log = "You win! Rock beats scissors";
      playerScore++;
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      log = "You lose! Scissors beats paper";
      computerScore++;
    } else if (computerSelection === "rock") {
      log = "You win! Paper beats rock";
      playerScore++;
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      log = "You lose! Rock beats scissors";
      computerScore++;
    } else if (computerSelection === "paper") {
      log = "You win! Scissors beats paper";
      playerScore++;
    } else {
      log = "It's a tie";
    }
  }
  return log;
}




function random(number) {
  return Math.floor(Math.random() * number + 1);
}
function game() {
  for (let i=0; i<5;i++) {
    let playerSelection = prompt("What's your choice: rock, paper or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    
    console.log("Your score is:" + playerScore);
    console.log("Computer's score is:" + computerScore);
  }
  if (computerScore > playerScore) {
    console.log("You lost!")
  if (playerScore > computerScore) {
    console.log("You Won!")
  }
  }
  if (computerScore === playerScore) {
    console.log("It's a tie! Play again?")

  }
  
}
game();
