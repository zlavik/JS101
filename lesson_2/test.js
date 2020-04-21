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

let sum;

switch (sum){
  case '+':
  case 'add':
  case '1':
    operation = "+";
    sum = number1 + number2;
    break;
  case 'subtract':
  case '-':
  case '2':
    operation = "-";
    sum = number1 - number2;
    break;
  case '*':
  case 'multiply':
  case '3':
    operation = "*";
    sum = number1 * number2;
    break;
  case '/':
  case 'divid':
  case '4':
    operation = "/";
    if (number1 === 0) {
      return 0;
    } else if (number2 === 0) {
      return ("Cannot divide by zero‬");
    } else {
      sum = number1 / number2;
    }
    break;
  }

if (sum === undefined) {
  sum = ("Error!");
} else {
  console.log("Calculating...");
  console.log(`\n${number1} ${operation} ${number2} = ${sum}\n`);
  console.log('Exiting calculator..');
}


