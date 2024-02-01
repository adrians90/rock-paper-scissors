//This is an implementation of rock paper scissors played in
//the console against the computer

//Pseudocode below:
//-create a blank HTML document and link script tag
//-function getComputerChoice that randomly returns either 'rock','paper' or 'scissors'
//-console log what getComputerChoice returns
//-function playRound that plays a single round of the game
//-parameters for playRound are playerSelection and computerSelection
//-playRound returns a string that declares the winner or tie "You lose"
//-playerSelectrion.toLowerCase()
//-return result of playRound() , not console log the result.

// getComputerChoice will make the computer select a random weapon
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let randomChoice = options[Math.floor(Math.random()*options.length)]
    return randomChoice
}

//playRound plays a single game against the computer and
// returns the winner or tie
function playRound(playerSelection, computerSelection) {
//declare playerSelection and computerSelection
//make playerSelection case insensitive
//console log both choices
    //let playerSelection = prompt("Rock, Paper or Scissors?")
    //playerSelection = playerSelection.toLowerCase();
    //let computerSelection = getComputerChoice();
    //console.log(playerSelection, computerSelection)
//game logic and conditionals below:
//possible results are win, lose, tie or something gone wrong

    if(playerSelection === computerSelection) {
        return `It's a tie! You both selected ${playerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost! paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! rock beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper"
    } else {
        return "Something must be wrong!"
    }

}

//playGame plays 5 games, keeps score and console logs the winner and result

function playGame() {
//declare computerScore and playerScore and initialize to 0
    let userScore = 0;
    let computerScore = 0;
// loop the previous playRound function 5 times
for (let i =0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?")
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
//display user and computer selections :
    console.log(`Player selected: ${playerSelection}`,`Computer selected: ${computerSelection}`)
// conditionals below :
    if(playerSelection === computerSelection) {
        console.log(`It's a tie! You both selected ${playerSelection}`)
        console.log(`Your score: ${userScore} Computer score: ${computerScore}`)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        console.log(`Your score: ${userScore} Computer score: ${computerScore}`)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore++
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        console.log(`Your score: ${userScore} Computer score: ${computerScore}`)
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        console.log(`Your score: ${userScore} Computer score: ${computerScore}`)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        console.log(`Your score: ${userScore} Computer score: ${computerScore}`)
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        console.log(`Your score: ${userScore} Computer score: ${computerScore}`)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore++
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        console.log(`Your score: ${userScore} Computer score: ${computerScore}`)
    } else {
        console.log("What did you do? You broke my game!!")
        i--;
    }

}
      if (userScore === computerScore) {
        return "It's a tie! Play again?"
      } else if (userScore < computerScore) {
        return `You lost! Your score is: ${userScore} and Computer score is: ${computerScore} Play again?`
      } else {
        return `You won! Your score is : ${userScore} and Computer score is: ${computerScore} Play again?`
      }
}
playGame();