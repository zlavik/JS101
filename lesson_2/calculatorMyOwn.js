/* eslint-disable complexity */
/* eslint-disable max-len */
// PSEUDOCODE
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
const readline = require('readline-sync');
let result;
let number1;
let operation;
let number2;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
console.clear();

prompt("Calculator has been initiated..\n");
prompt('Enter your first number: ');
number1 = readline.question();
while (invalidNumber(number1)) {
  prompt("Please enter a valid number!\n");
  number1 = readline.question();
}
console.clear();

prompt("Enter one of the following:");
console.log('\n1) +\n2) -\n3) *\n4) /\n5) ^\n6) %\n');
operation = readline.question();
while (!['1', '2', '3', '4', '5' , '6'].includes(operation)) {
  prompt("Must choose 1, 2, 3, 4, 5, or 6\n");
  operation = readline.question();
}
console.clear();

prompt('Enter your second number: ');
number2 = readline.question();
while (invalidNumber(number2)) {
  prompt("Please enter a valid number!\n");
  number2 = readline.question();
}
console.clear();


result = theCalculation(number1, number2);
function theCalculation(number1, number2) {
  if (operation === "+") {
    return Number(number1) + Number(number2);
  } else if (operation === "2") {
    return  Number(number1) - Number(number2);
  } else if (operation === "3") {
    return  Number(number1) * Number(number2);
  } else if (operation === "4") {
    if (number1 === 0) {
      return 0;
    } else if (number2 === 0) {
      return ("Cannot divide by zero‬");
    }
    return  Number(number1) / Number(number2);
  } else if (operation === "^") {
    if (number1 === 0 && number2 === 0) {
      return ("indeterminate");
    }
    return  Number(number1) ** Number(number2);
  } else if (operation === "6") {
    if (number2 === 0 ) {
      return ("Error");
    }
    return  Number(number1) % Number(number2);
  } else {
    return ("Error invaild opperation!");
  }
}


if (result === undefined) {
  result = ("Error!");
} else {
  console.log("Calculating...");
  console.log(`\n${number1} ${operation} ${number2} = ${result}\n`);
  console.log('Exiting calculator..');
}