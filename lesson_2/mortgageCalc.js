const readline = require('readline-sync');
const VALID_RESPONSES = ['1', '2'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


while (true) {
  console.clear();
  prompt('Loan Calculator is running!\n\n');

  let loan = readline.question('=> What is the Loan amount?: $');
  while (invalidNumber(loan)) {
    console.log("Invalid amount. Enter a number: ");
    loan = readline.question();
  }

  let apr = readline.question('=> What is your interest rate?: ');
  while (invalidNumber(apr)) {
    console.log("Invalid interest rate. Enter again: ");
    apr = readline.question();
  }

  let loanDuration = readline.question('=> Loan period: ');
  while (invalidNumber(loanDuration)) {
    console.log("Invalid loan period. Enter again: ");
    loanDuration = readline.question();
  }

  let laonFormat = readline.question(`=> ${loanDuration} years or months?:\n\n1) years\n2) months\n`);
  while (laonFormat.trimStart() === '' ||
                  !VALID_RESPONSES.includes(laonFormat)) {
    console.log("Invalid loan format. Enter: 1) for years, or 2) for months\n");
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

  prompt(`Loan: $${Number(loan).toFixed(2)}`);
  prompt(`Total interest Paid on loan: $${totalInterestAmount.toFixed(2)}`);
  prompt(`Total cost: $${totalCost.toFixed(2)}`);
  prompt(`Monthly payments: $${monthlyPayments.toFixed(2)}\n\n`);

  prompt("Another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') {
    console.log("Stopping loan calculations...");
    break;
  }
}