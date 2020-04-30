/*
Pseudo-code

- Welcome user
- Ask user to read rules
  -Validate
  -Continue
- Ask user to pick rock, paper, scissors, lizard, or spock.
  - Validate
- Let computer make a random choice
- Displayer winner after 5 rounds
- Ask to play again
  - Validate
- End program

Validation checks:
— pick rock, paper, scissors, lizard, or spock.
— Empty string
— Unexpected letter (i.e., u instead of y)

*/

// REQUIRED VARIABLES
const readline = require('readline-sync');
const MESSAGES = require('./rpslsMessages.json');
const VALID_CHOICES = ['r', 'p', 'ss', 'l', 'sp'];
const WINNING_MOVES = {
  rock     : ['scissors', 'lizard'],
  paper    : ['spock', 'rock'],
  scissors : ['paper', 'lizard'],
  lizard   : ['paper', 'spock'],
  spock    : ['rock', 'scissors']
};
const FULL_NAMES = {
  ss: 'scissors',
  r: 'rock',
  p: 'paper',
  l: 'lizard',
  sp: 'spock'
};

// Message functions
function messages(message) {
  return MESSAGES[message];
}
function prompt(key) {
  let message = messages(key);
  console.log(`${message}`);
}
function displayMessage(message) {
  console.log(`${message}`);
}


// Gets input from users
function fetchChoice(inputType) {
  prompt(inputType);
  let input = readline.question();
  while (isInvalidInput(input, inputType)) {
    prompt(`invalid_${inputType}`);
    input = readline.question();
  }
  return input;
}


// validations
const isValidAnswer = input => {
  input = input.toLowerCase();
  return input !== "y" && input !== "no" &&
        input !== "n" && input !== "yes";
};

const isValidChoice = input => {
  input = input.toLowerCase();
  return input !== "r" && input !== "p" &&
          input !== "ss" && input !== "sp" &&
          input !== "l";
};


// Calls Validation checks on user inputs
function isInvalidInput(input, inputType) {
  switch (inputType) {
    case "readRules":
      return isValidAnswer(input);
    case "playerChoice":
      return isValidChoice(input);
    case "playAgain":
      return isValidAnswer(input);
    default:
      return "Error";
  }
}

//Game functions
function displayRoundWinner (playerChoice, computerChoice) {
  displayMessage(`\nYou chose ${playerChoice}\nComputer chose ${computerChoice}`);
  if (playerChoice === computerChoice) {
    prompt('tie');
  } else if (WINNING_MOVES[playerChoice].includes(computerChoice)) {
    prompt(`playerWinsMatch`);
  } else {
    prompt("computerWinsMatch");
  }
}


function updateScores (score, playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    //Do nothing
  } else if (WINNING_MOVES[playerChoice].includes(computerChoice)) {
    score.playerScore += 1;
  } else {
    score.computerScore += 1;
  }
}


function displayScore (score) {
  displayMessage(`Score: Player: ${score.playerScore} VS Computer: ${score.computerScore}`);
}


function getMatchWinner(score) {
  if (score.playerScore === 5 && score.computerScore < 5) {
    return 'player';
  } else if (score.playerScore < 5 && score.computerScore === 5) {
    return 'computer';
  } else {
    return 'no winner';
  }
}


function displayMatchWinner(score) {
  if (score.playerScore === 5 && score.computerScore < 5) {
    prompt('playerWins');
  } else if (score.playerScore < 5 && score.computerScore === 5) {
    prompt('computerWins');
  }
}


function displayStartGame() {
  prompt('welcome_message');
}


function resetScore(score) {
  score.playerScore = 0;
  score.computerScore = 0;
}


console.clear();
let score = { playerScore: 0, computerScore: 0 };
displayStartGame();

//Asking if user wants to read rules
while (true) {
  let answer = fetchChoice("readRules");
  answer = answer.toLowerCase();

  if (answer === 'n' || answer === 'no' ) {
    console.clear();
    break;
  } else {
    console.clear();
    prompt("rules");
    let answer = prompt("letsContinue");
    answer = readline.question();
    if (answer !== true || answer !== false) {
      console.clear();
      break;
    }
  }
}
// The game
while (true) {
  let playerChoice = fetchChoice(`playerChoice`);
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  playerChoice = FULL_NAMES[playerChoice];
  computerChoice = FULL_NAMES[computerChoice];

  updateScores (score, playerChoice, computerChoice);

  let matchWinner = getMatchWinner(score);
  if (matchWinner === 'no winner') {
    console.clear();
    displayScore(score);
    displayRoundWinner(playerChoice, computerChoice);
    continue;
  } else {
    console.clear();
    displayScore(score);
    displayRoundWinner(playerChoice, computerChoice);
    displayMatchWinner(score);

    let answer = fetchChoice("playAgain");
    answer = answer.toLowerCase();
    if (answer === 'no' || answer === 'n') {
      console.clear();
      prompt("exitingMessage");
      break;
    } else if (answer === 'y' || answer === 'yes') {
      resetScore(score);
      console.clear();
    }
  }
}