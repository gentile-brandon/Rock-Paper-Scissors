//Function to select Computer's Choice
function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let random =
      computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return random;
  }
  // Function to play a single round against computer
  function round(player, computer) {
    const test = player.toLowerCase();
    console.log(test, computer);
    if (test === computer) {
      return "Tie Game!";
    } else if (test === "rock" && computer === "scissors") {
      return "Victory!";
    } else if (test === "rock" && computer === "paper") {
      return "You lose!";
    } else if (test === "paper" && computer === "rock") {
      return "Victory!";
    } else if (test === "paper" && computer === "scissors") {
      return "You lose!";
    } else if (test === "scissors" && computer === "rock") {
      return "You lose!";
    } else if (test === "scissors" && computer === "paper") {
      return "Victory!";
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
      let player = prompt("Rock, paper, or scissors?");
      let computer = getComputerChoice();
      let result = round(player, computer); //Can call function while assigning to variable
      console.log(result);
      if (result === "Victory!") {
        score[0] = score[0] + 1;
      } else if (result === "You lose!") {
        score[1] = score[1] + 1;
      }
      console.log(score);
    }
    console.log(compareScore(score)); //Call function inside console.log
  }
  game();