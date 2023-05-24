function getComputerChoice() {
  //stance stores the random number and compares it to 0, 1 or 2
  let stance = Math.floor(Math.random() * 3);
  //Use Math.random() to create a number between 0 and 1, use * 3 to create numbers between 0 and 3
  //Use Math.floor() to round the number down
  //the stance variable is compared and returned a string indicating the stance
  if (stance === 0) {
    return "Rock";
  } else if (stance === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
//function round takes two parameters, playerSelection which records the selection
//computerSelection records the computer choice got from getComputerChoice()
function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  //two variables are converted to lowercase
  //playerSelection and computerSelection are compared
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else {
    return "Draw";
  }
}
//The function games is to play 5 round game that keeps score and reports a winner or loser
function game() {
  //Variable for scores
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    //Use prompt to get player choice
    let playerChoice = prompt("Enter either Rock, Paper or Scissors: ");
    //Use function to get computer choice
    let computerChoice = getComputerChoice();
    //Store results in a variable
    let result = round(playerChoice, computerChoice);
    //Log the result
    console.log(result);
    //Record score
    if (result.charAt(4) === "W") {
      playerScore++;
    } else if (result.charAt(4) === "L") {
      computerScore++;
    }
  }
  //Return the total score
  if (playerScore > computerScore) {
    return "The human wins!";
  } else if (playerScore < computerScore) {
    return "The computer wins!";
  } else {
    return "No one wins!";
  }
}
console.log(game());
