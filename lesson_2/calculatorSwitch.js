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
let operation = rlSync.question('\n1) +\n2) -\n3) *\n4) /\n5) ^\n6) %\n');
console.clear();

let number2 = Number(rlSync.question('Enter the second number: '));
console.clear();

let sum;
switch (operation) {
  case '+':
  case "1":
    operation = "+";
    sum = number1 + number2;
    break;
  case '-':
  case '2':
    operation = "-";
    sum = number1 - number2;
    break;
  case '*':
  case '3':
    operation = "*";
    sum = number1 * number2;
    break;
  case '/':
  case '4':
    operation = "/";
    if (number1 === 0) {
      sum = 0;
    } else if (number2 === 0) {
      console.log("Cannot divide by 0‬");
    } else {
      sum = number1 / number2;
    }
    break;
  case '^':
  case '5':
    operation = "^";
    if (number1 === 0) {
      sum = 0;
    } else {
      sum = number1 ** number2;
    }
    break;
  case '%':
  case '6':
    operation = "%";
    if (number2 === 0 ) {
      sum = number1;
    } else {
      sum = number1 % number2;
    }
    break;
  default:
    console.log("Error invaild opperation!");
    break;
}

if (sum === undefined || isNaN(sum)) {
  console.log("Error!");
} else {
  console.log("Calculating...");
  console.log(`\n${number1} ${operation} ${number2} = ${sum}\n`);
  console.log('Exiting calculator..');
}


