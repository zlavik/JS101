const readline = require("readline-sync");
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MESSAGES = require('./tictactoeMessages.json');
const NUMBER_OF_GAMES = 3;
const VALID_PLAYER = ['player', 'computer', 'c', 'p', 'C', 'P'];
const CURRENT_PLAYER = 'nobody';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

// Message Functions
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


//Validations
const isValidPlayAgainChoice = input => {
  return input !== "y" && input !== "no" &&
        input !== "n" && input !== "yes";
};

function fetchChoice(input) {
  prompt(input);
  let answer = readline.question().toLowerCase();
  while (isValidPlayAgainChoice(answer, input)) {
    prompt(`invalid_${input}`);
    answer = readline.question().toLowerCase();
  }
  return answer;
}


// Game Functions
function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |   ');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |   ');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |   ');
  console.log('');
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
              `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    displayMessage (`Choose a square (${joinOr(emptySquares(board))})`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("invalidSquareChose");
  }
  board[square] = HUMAN_MARKER;
}

function chooseSquare (board, currentPlayer) {
  let starter;
  if (currentPlayer === 'Player') {
    starter = playerChoosesSquare(board);
  } else if (currentPlayer === 'Computer') {
    starter = computerChoosesSquare(board);
  }
  return starter;
}

function alternatePlayer(currentPlayer) {
  let alternatePlayer;
  if (currentPlayer === 'Player' || currentPlayer === 'C' ) {
    alternatePlayer = 'Computer';
  } else if (currentPlayer === 'Computer' || currentPlayer === 'P') {
    alternatePlayer = 'Player';
  }
  return alternatePlayer;
}

function pickRandomSquare (board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let randomSquare = emptySquares(board)[randomIndex];
  return randomSquare;
}

function pickCentralSquare (board) {
  const CENTRAL_SQUARE = '5';
  let square = null;
  if (emptySquares(board).includes(CENTRAL_SQUARE)) square = CENTRAL_SQUARE;
  return square;
}

function defensiveMove(board, square) {
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line,board, HUMAN_MARKER);
    if (square) break;
  }
  return square;
}

function offensiveMove(board, square) {
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  return square;
}

function computerChoosesSquare(board) {
  let square;

  square = offensiveMove(board, square);
  if (!square) {
    square = defensiveMove(board, square);
  }

  if (!square) {
    square = pickCentralSquare (board);
  }

  if (!square) {
    square = pickRandomSquare (board);
  }
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function findAtRiskSquare (line, board, marker) {
  let markerInLine = line.map(square => board[square]);

  if (markerInLine.filter(val => val === marker).length === 2) {
    let unusedSqure = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSqure !== undefined) {
      return unusedSqure;
    }
  }
  return null;
}

function chooseWhoStartsFirst(initialChoice) {
  let starter;

  if (initialChoice === 'player' ||
   initialChoice === 'p' ||  initialChoice === 'P' ) {
    starter = 'Player';
  } else if (initialChoice === 'computer' ||
   initialChoice === 'c' || initialChoice === 'C') {
    starter = 'Computer';
  } else if (initialChoice === 'nobody') {
    prompt('askWhoGoesFirst');
    let answer = readline.question();
    if (!VALID_PLAYER.includes(answer)) {
      prompt('invalidWhoGoesFirstAnswer');
      answer = readline.question();
    }
    starter = answer[0].toUpperCase() + answer.slice(1);
  }
  return starter;

}

function displayScore(playerScore, computerScore) {
  displayMessage(`Player: ${playerScore} | Computer: ${computerScore}`);
}

function displayCurrentGame(currentGame, NUMBER_OF_GAMES) {
  displayMessage(`Game ${currentGame}/${NUMBER_OF_GAMES}`);
}

function displayWhoWon(board) {
  if (someoneWon(board)) {
    displayMessage(`${detectWinner(board)} won this round!`);
  } else {
    displayMessage('Tie round.');
  }
}

console.clear();
let currentPlayer = chooseWhoStartsFirst(CURRENT_PLAYER);


//Play again loop
while (true) {

  let currentGame = 0;
  let score = {player : 0, computer : 0};
  displayScore(score.player, score.computer);

  //
  while (currentGame < NUMBER_OF_GAMES) {
    let board = initializeBoard();
    displayBoard(board);
    displayScore(score.player, score.computer);
    displayCurrentGame (currentGame, NUMBER_OF_GAMES);

    while (true) {
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
      displayBoard(board);
      displayScore(score.player, score.computer);
      displayCurrentGame (currentGame, NUMBER_OF_GAMES);
    }

    currentGame += 1;
    displayBoard(board);

    displayWhoWon(board);

    if (detectWinner(board) === 'Player') {
      score.player += 1;
    } else if (detectWinner(board) === 'Computer') {
      score.computer += 1;
    }

    displayScore(score.player, score.computer);
    displayCurrentGame (currentGame, NUMBER_OF_GAMES);

    prompt('AskToContinue');
    let answer = readline.question();
    if (answer === '') continue;
    displayScore(score.player, score.computer);
  }
  console.clear();
  displayScore(score.player, score.computer);

  if (score.player > score.computer) {
    prompt("playerWon");
  } else if (score.player < score.computer) {
    prompt("computerWon");
  } else {
    prompt("tie");
  }

  let answer = fetchChoice("playAgain");
  if (answer === 'y' || answer === 'yes') {
    console.clear();
  } else {
    break;
  }
}
prompt('exitMsg');