
let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')


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


  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      const p = document.createElement('p')
      p.innerText = "You lose! Paper beats rock";
      outcomeDiv.appendChild(p)
      computerScore++;
    } else if (computerSelection === "scissors") {
      const p = document.createElement('p')
      p.innerText = "You win! Rock beats scissors";
      outcomeDiv.appendChild(p)
      playerScore++;
    } else {
      const p = document.createElement('p')
      p.innerText = "It's a tie";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      const p = document.createElement('p')
      p.innerText = "You lose! Scissors beats paper";
      outcomeDiv.appendChild(p)
      computerScore++;
    } else if (computerSelection === "rock") {
      const p = document.createElement('p')
      p.innerText = "You win! Paper beats rock";
      outcomeDiv.appendChild(p)
      playerScore++;
    } else {
      const p = document.createElement('p')
      p.innerText = "It's a tie";
      outcomeDiv.appendChild(p)
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      const p = document.createElement('p')
      p.innerText = "You lose! Rock beats scissors";
      outcomeDiv.appendChild(p)
      computerScore++;
    } else if (computerSelection === "paper") {
      const p = document.createElement('p')
      p.innerText = "You win! Scissors beats paper";
      outcomeDiv.appendChild(p)
      playerScore++;
    } else {
      const p = document.createElement('p')
      p.innerText = "It's a tie";
    }
  }
  
}

const checkForWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('player-won')
    h2.innerText = `You won ${playerScore} to ${computerScore} Great job!`
    outcomeDiv.appendChild(h2);

  }

  if (computerScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('computer-won')
    h2.innerText = `You lost ${playerScore} to ${computerScore} !`
    outcomeDiv.appendChild(h2);
  }
  
}
// created a function that updates score
const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player score:   ${playerScore}`
  computerScoreSpan.innerText = `Computer score:   ${computerScore}`
}
//added event listeners to the buttons
rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'rock'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
})

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'paper'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
})

scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'scissors'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
})




function random(number) {
  return Math.floor(Math.random() * number + 1);
}

/*function game() {
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
  
}*/
//game();



