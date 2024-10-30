// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

// Logic to get computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)

  let choice
  switch (randomNumber) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Scissors"
      break;
    case 2:
      choice = "Paper";
  }
  return choice
}

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.

// Logic to get user choice
const getHumanChoice = () => {
  let choice = prompt("Rock, Paper, Scissors?")
  return choice
}

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice(), "cpu");
console.log(getHumanChoice(), "human")