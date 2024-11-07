// Logic to get computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)

  let choice
  switch (randomNumber) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "scissors"
      break;
    case 2:
      choice = "paper";
  }
  return choice
}

// Logic to get user choice
const getHumanChoice = () => {
  let choice = prompt("Rock, Paper, Scissors?")
  return choice
}

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice.toLowerCase() === "rock" && computerChoice === "rock") {
    console.log("Tied!")
    return
  } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
    console.log("Paper wins, you lose!")
    return "computer"
  } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
    console.log("Rock wins, you win")
    return "human"
  }

  if (humanChoice.toLowerCase() === "paper" && computerChoice === "paper") {
    console.log("Tied!")
    return
  } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
    console.log("Paper wins, you win!")
    return "human"
  } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
    console.log("Scissors wins, you lose")
    return "computer"
  }

  if (humanChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
    console.log("Tied!")
    return
  } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
    console.log("Scissors wins, you win!")
    return "human"
  } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
    console.log("Rock wins, you lose")
    return "computer"
  }
}

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice()
    const humanChoice = getHumanChoice()
    const result = playRound(humanChoice, computerChoice);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  }

  console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Human wins the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame()
