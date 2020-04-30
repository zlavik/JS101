/*
Pseudo-code

- Welcome user
- Ask user to pick rock, paper or scissors
  - Validate
- Let computer make a random choice
- Displayer winner
- Ask to play again
  - Validate
- End program

Validation checks:
— pick rock, paper or scissors
— Return
— Empty string
— Unexpected letter (i.e., u instead of y)

*/

// REQUIRED VARIABLES
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

// Program functions
function prompt(message) {
  console.log(`=> ${message}`);
}

function displayerWinner (playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((playerChoice === 'rock' && computerChoice === 'paper') ||
             (playerChoice === 'paper' && computerChoice === 'scissors') ||
             (playerChoice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

// game
while (true) {
  prompt('Choose one: rock, paper, scissors');
  let playerChoice = readline.question();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt(`Thats an invalid choice!\nChoose one: ${VALID_CHOICES.join(', ')}\n`);
    playerChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayerWinner(playerChoice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    prompt('goodbye!');
    break;
  }
}