const readline = require('readline-sync');
const VALID_RESPONSES = ['1', '2'];
const MESSAGES = require('./mortgageMessages.json');
const LANGUAGE = 'en';

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidApr(input) {
  return input.trimStart() === 0 ||
    input === '' ||
    Number(input) < 0 ||
    Number.isNaN(Number(input));
}

function invalidNumber(input) {
  return input.trimStart() === 0 ||
    input === '' ||
    Number(input) <= 0 ||
    Number.isNaN(Number(input));
}

while (true) {
  console.clear();
  prompt('welcome_message');

  prompt('loan_amount');
  let loan = readline.question();
  while (invalidNumber(loan)) {
    prompt("invalid_amount");
    loan = readline.question();
  }

  prompt('interest_rate');
  let apr = readline.question();
  while (invalidApr(apr)) {
    prompt("positive_number");
    apr = readline.question();
  }

  prompt('loan_length');
  let loanDuration = readline.question();
  while (invalidNumber(loanDuration)) {
    prompt("invalid_loan_length");
    loanDuration = readline.question();
  }

  prompt(`length_format`);
  let laonFormat = readline.question();
  while (laonFormat.trimStart() === '' ||
                  !VALID_RESPONSES.includes(laonFormat)) {
    prompt("invalid_length_format");
    laonFormat = readline.question();
  }

  console.clear();

  if (Number(laonFormat) === 1) {
    loanDuration *= 12;
  }

  let monthlyInterestRate;
  let monthlyPayments;

  if (apr >= 1)  {
    apr /= 100;
  }

  if (Number(apr) === 0) {
    monthlyPayments = loan / loanDuration;
  } else if (Number(apr) > 0) {
    monthlyInterestRate = apr / 12;
    monthlyPayments = loan * (monthlyInterestRate /
       (1 - Math.pow((1 + monthlyInterestRate),(-(loanDuration)))));
  } else {
    console.log("Error");
  }


  let totalCost = monthlyPayments * loanDuration;
  let totalInterestAmount = totalCost - loan;

  console.log(`Loan: $${Number(loan).toFixed(2)}`);
  console.log(`Total interest Paid on loan: $${totalInterestAmount.toFixed(2)}`);
  console.log(`Total cost: $${totalCost.toFixed(2)}`);
  console.log(`Monthly payments: $${monthlyPayments.toFixed(2)}\n\n`);

  prompt("another_calc");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('valid_exit');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') {
    console.clear();
    prompt("exit_message");
    break;
  }
}