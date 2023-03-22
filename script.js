//Function to select Computer's Choice
function getComputerChoice() {
  const computerChoice = ["r", "p", "s"];
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}
// Function to play a single round against computer
function round(player, computer) {
  const playerInput = player.charAt(0).toLowerCase();
  console.log(playerInput, computer);
  //   if (test === computer) {
  //     return "Tie Game!";
  //   } else if (test === "rock" && computer === "scissors") {
  //     return "Victory!";
  //   } else if (test === "rock" && computer === "paper") {
  //     return "You lose!";
  //   } else if (test === "paper" && computer === "rock") {
  //     return "Victory!";
  //   } else if (test === "paper" && computer === "scissors") {
  //     return "You lose!";
  //   } else if (test === "scissors" && computer === "rock") {
  //     return "You lose!";
  //   } else if (test === "scissors" && computer === "paper") {
  //     return "Victory!";
  //   }

  // if else written as switch statement
  switch (playerInput + computer) {
    case "rr":
    case "pp":
    case "ss":
      return "Tie Game!";
    case "rs":
    case "pr":
    case "sp":
      return "Victory!";
    case "rp":
    case "ps":
    case "sr":
      return "You lose!";
    default:
      return "Invalid";
  }
}
// Function to compare the final score of the game
function compareScore(score) {
  if (score[0] > score[1]) {
    return "Congratulations!";
  } else if (score[0] < score[1]) {
    return "Better luck next time!";
  } else {
    return "It's a tie!";
  }
}
// function to play whole game
function game() {
  const score = [0, 0];
  for (let i = 0; i < 5; i++) {
    const player = prompt("Rock, paper, or scissors?");
    const computer = getComputerChoice();
    const result = round(player, computer); //Can call function while assigning to variable
    if (result === "Victory!") {
      score[0] = score[0]++;
    } else if (result === "You lose!") {
      score[1] = score[1]++;
    }
    console.log(`
    ${result}
    The current score is ${score[0]} to ${score[1]}.
    `);
  }
  console.log(compareScore(score)); //Call function inside console.log
}
game();
