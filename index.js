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

console.log(getComputerChoice());