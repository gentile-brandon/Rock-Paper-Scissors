const score = [0, 0];
const gameButtons = document.querySelectorAll("button");

//Function to select Computer's Choice
function getComputerChoice() {
  const computerChoice = ["r", "p", "s"];
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}
// Function to play a single round against computer
function round(player, computer) {
  console.log(player);
  const playerInput = player.charAt(0).toLowerCase();

  switch (playerInput + computer) {
    case "rr":
    case "pp":
    case "ss":
      return "Tie Game!";
    case "rs":
    case "pr":
    case "sp":
      score[0] += 1;
      return "Victory!";
    case "rp":
    case "ps":
    case "sr":
      score[1] += 1;
      return "You lose!";
    default:
      return "Invalid";
  }
}

/**
 * turns of buttons after score reaches 5
 * @function disableButtons
 */
function disableButtons() {
  gameButtons.forEach((button) => {
    button.disabled = true;
  });
}

/**
 * Function to compare the final score of the game
 * @param {string} result String determined from round function
 * @returns string containing result of game
 */
function compareScore(result) {
  if (score[0] === 5) {
    disableButtons();
    return "Congratulations!";
  } else if (score[1] === 5) {
    disableButtons();
    return "Better luck next time!";
  } else {
    return `${result}
    The current score is ${score[0]} to ${score[1]}.
    `;
  }
}

gameButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const player = e.currentTarget.dataset.type;
    const computer = getComputerChoice();
    const result = round(player, computer);

    const div = document.querySelector("#results");
    div.textContent = compareScore(result);
  });
});
