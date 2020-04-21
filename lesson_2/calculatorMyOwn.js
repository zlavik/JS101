/* eslint-disable complexity */
/* eslint-disable max-len */
// PSEUDOCODE
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
let rlSync = require('readline-sync');
console.clear();
console.log("Hello, Calculator has been initated..\n");

let number1 = Number(rlSync.question('Enter the first number: '));
console.clear();
console.log("Enter one of the following:");
let operation = rlSync.question('\n1) (+) add \n2) (-) subtract \n3) (*) multiply \n4) (/) divide \n5) (^) exponential \n6) (%) remainder \n');
console.clear();

let number2 = Number(rlSync.question('Enter the second number: '));
console.clear();

let sum = theCalculation(number1, number2);

// eslint-disable-next-line max-lines-per-function
function theCalculation(number1, number2) {
  if (operation === "add" || operation === "+" || operation === "1") {
    operation = "+";
    return number1 + number2;
  } else if (operation === "subtract" || operation === "-" || operation === "2") {
    operation = "-";
    return  number1 - number2;
  } else if (operation === "multiply" || operation === "*" || operation === "3") {
    operation = "*";
    return  number1 * number2;
  } else if (operation === "divide" || operation === "/" || operation === "4") {
    operation = "/";
    if (number1 === 0) {
      return 0;
    } else if (number2 === 0) {
      return ("Cannot divide by zero‬");
    }
    return  number1 / number2;
  } else if (operation === "exponent" || operation === "5" || operation === "^") {
    operation = "^";
    if (number1 === 0 && number2 === 0) {
      return ("indeterminate");
    }
    return  number1 ** number2;
  } else if (operation === "remainder" || operation === "%" || operation === "6") {
    operation = "%";
    if (number2 === 0 ) {
      return ("Error");
    }
    return  number1 % number2;
  } else {
    return ("Error invaild opperation!");
  }
}


if (sum === undefined) {
  sum = ("Error!");
} else {
  console.log("Calculating...");
  console.log(`\n${number1} ${operation} ${number2} = ${sum}\n`);
  console.log('Exiting calculator..');
}