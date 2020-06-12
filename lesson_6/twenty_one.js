/* pseudocode
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/
const VALID_PLAY_AGAIN_CHOICES = ['y', 'yes', 'n', 'no', ];
const readline = require('readline-sync');
const MESSAGES = require('./twenty_oneMessages.json');
const DECK_SUIT = ['♦', '♥', '♣', '♠'];
const CARD_VALUES = ['A', '2', '3', '4', '5', '6', '7',
  '8', '9', '10', 'J', 'Q', 'K'];
const VALID_ACTIONS = ['s', 'h'];
const MAX_HIT = 21;
const DEALER_MAX_STAY = MAX_HIT - 4;
const BEST_OF = 3;


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


// Validations

function fetchChoice(input) {
  prompt(input);
  let answer = readline.question().toLowerCase();
  while (!VALID_PLAY_AGAIN_CHOICES.includes(answer)) {
    prompt(`invalid_${input}`);
    answer = readline.question().toLowerCase();
  }
  return answer;
}


// Game Functions
function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < DECK_SUIT.length; suitIndex++) {
    let suit = DECK_SUIT[suitIndex];

    for (let valueIndex = 0; valueIndex < CARD_VALUES.length; valueIndex++) {
      let value = CARD_VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }
  return shuffle(deck);
}

function shuffle(cards) {
  for (let index = cards.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [cards[index], cards[otherIndex]] = [cards[otherIndex], cards[index]];
  }
  return cards;
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === "A").forEach(_ => {
    if (sum > MAX_HIT) sum -= 10;
  });

  return sum;
}

function busted(cards) {
  return cards > MAX_HIT;
}


function detectResult(dealerValue, playerValue) {

  if (playerValue > MAX_HIT) {
    return 'PLAYER_BUSTED';
  } else if (dealerValue > MAX_HIT) {
    return 'DEALER_BUSTED';
  } else if (dealerValue < playerValue) {
    return 'PLAYER';
  } else if (dealerValue > playerValue) {
    return 'DEALER';
  } else if (dealerValue === playerValue) {
    return 'TIE';
  } else {
    return 'error';
  }
}
function displayResults(dealerValue, playerValue) {
  let result = detectResult(dealerValue, playerValue);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('playerBusted');
      break;
    case 'DEALER_BUSTED':
      prompt('dealerBusted');
      break;
    case 'PLAYER':
      prompt('playerWins');
      break;
    case 'DEALER':
      prompt('dealerWins');
      break;
    case 'TIE':
      prompt('tie');
  }
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

function showHandAndVal(dlrHand, plrHand, plrVal, dlrVal, mask = false) {
  if (mask) {
    prompt("divider");
    displayMessage(`Dealers hand: ${dlrHand[0][1]}${dlrHand[0][0]} ??`);
  } else {
    prompt("divider");
    displayMessage(`Dealers hand: ${hand(dlrHand)}`);
  }
  displayMessage(`Players hand: ${hand(plrHand)}`);
  prompt("divider");
  displayMessage(`Players hand strength: ${plrVal}`);
  if (!mask) {
    displayMessage(`Dealers hand strength: ${dlrVal}`);
  }
}

function updateTotals(playerValue, playerHand) {
  playerValue = total(playerHand);
  return playerValue;
}
function dealCards(deck, qty) {
  return deck.splice(0, qty);
}
function dealCard(deck, playerCards) {
  playerCards.push(...dealCards(deck, 1));
  return playerCards;
}

function sleep(ms) {
  let waitUntil = new Date().getTime() + ms;
  while (new Date().getTime() < waitUntil);
}

function playAgain() {
  let answer = fetchChoice("playAgain");
  return (answer === 'y' || answer === 'yes');
}

function displayRoundMessage(currentGame) {
  if (currentGame > 1) {
    readline.question(`\nPress [enter] to Start the next round!\n`);
  }
}

function retrieveHitOrStayAnswer() {
  prompt('askToHitOrStay');
  let answer = readline.question().toLowerCase();
  while (!VALID_ACTIONS.includes(answer)) {
    prompt('invalidAction');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function shortDisplay(input, clear = true) {
  prompt(input);
  sleep(1000);
  if (clear === true) {
    console.clear();
  }
}

function displayCurrentGame(currentGame) {
  displayMessage(`Game: ${currentGame}/${BEST_OF}\n`);
}

function updateWinnersScore(dealerValue, playerValue, score) {
  let result = detectResult(dealerValue, playerValue);

  switch (result) {
    case 'PLAYER_BUSTED':
    case 'DEALER':
      score['Dealer'] += 1;
      break;
    case 'DEALER_BUSTED':
    case 'PLAYER':
      score['Player'] += 1;
      break;
  }

}

function displayScore(score) {
  console.clear();
  displayMessage(`Dealer: ${score["Dealer"]} | Player: ${score["Player"]}`);
}

function displayFinalResults(score) {
  if (score['Player'] > score['Dealer']) {
    prompt("playerWonGame");
  } else if (score['Player'] < score['Dealer']) {
    prompt("dealerWonGame");
  } else {
    prompt("gameTie");
  }
}

function isHit(answer) {
  return answer === 'h';
}

function isStay(answer) {
  return answer === 's';
}

function displayGameInfo (score, dealerHand, playerHand,
  playerValue, dealerValue, currentGame, mask = false) {
  if (mask) {
    displayScore(score);
    showHandAndVal(dealerHand, playerHand, playerValue, dealerValue, true);
    displayCurrentGame(currentGame);
  } else {
    displayScore(score);
    showHandAndVal(dealerHand, playerHand, playerValue, dealerValue);
    displayCurrentGame(currentGame);
  }
}
console.clear();
prompt('welcomeMsg');

readline.question(`Press [enter] to Start the game\n`);

//Game Loop
while (true) {
  let score = { Player : 0, Dealer: 0};
  let currentGame = 1;

  while (currentGame <= BEST_OF) {
    displayRoundMessage(currentGame);
    console.clear();

    let deck =  initalizeDeck();
    let playerHand = dealCards(deck, 2);
    let dealerHand = dealCards(deck, 2);
    let playerValue = total(playerHand);
    let dealerValue = total(dealerHand);

    displayGameInfo (score, dealerHand, playerHand,
      playerValue, dealerValue, currentGame, true);


    //Player Loop
    while (true) {
      let answer = retrieveHitOrStayAnswer();

      if (isHit(answer)) {
        shortDisplay("playerHit");
        dealCard(deck, playerHand);
        playerValue = updateTotals(playerValue, playerHand);
        displayGameInfo (score, dealerHand, playerHand,
          playerValue, dealerValue, currentGame, true);
      }

      if (isStay(answer) || busted(playerValue) || playerValue === 21) break;

    }

    if (busted(playerValue)) {
      updateWinnersScore(dealerValue, playerValue, score);
      displayGameInfo (score, dealerHand, playerHand,
        playerValue, dealerValue, currentGame);
      displayResults(dealerValue, playerValue);
      currentGame += 1;
      sleep(1750);
      continue;

    } else {
      displayGameInfo (score, dealerHand, playerHand,
        playerValue, dealerValue, currentGame, true);
      shortDisplay(`playerStayed`);
    }

    console.clear();
    displayGameInfo (score, dealerHand, playerHand,
      playerValue, dealerValue, currentGame);
    shortDisplay("dealerTurn",);

    //Dealers loop
    while (dealerValue < DEALER_MAX_STAY) {
      displayGameInfo (score, dealerHand, playerHand,
        playerValue, dealerValue, currentGame);
      shortDisplay('dealerHits', false);
      dealCard(deck, dealerHand);
      dealerValue = updateTotals(dealerValue, dealerHand);
    }

    if (busted(dealerValue)) {
      updateWinnersScore(dealerValue, playerValue, score);
      displayGameInfo (score, dealerHand, playerHand,
        playerValue, dealerValue, currentGame);
      displayResults(dealerValue, playerValue);
      currentGame += 1;
      sleep(1750);
      continue;

    } else {
      updateWinnersScore(dealerValue, playerValue, score);
      displayGameInfo (score, dealerHand, playerHand,
        playerValue, dealerValue, currentGame);
      shortDisplay('dealerStayed', false);
    }

    displayResults(dealerValue, playerValue);
    currentGame += 1;
    continue;
  }

  displayFinalResults(score);
  if (!playAgain()) break;
}


console.clear();
prompt('exitMsg');