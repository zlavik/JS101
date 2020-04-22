const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
console.clear();

prompt("Calculator has been initated..\n");

prompt('Enter the first number: ');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Please enter a valid number!\n");
  number1 = readline.question();
}
console.clear();

prompt("Enter one of the following:");
console.log('\n1) +\n2) -\n3) *\n4) /\n5) ^\n6) %\n');
let operation = readline.question();
while (!['1', '2', '3', '4', '5' , '6'].includes(operation)) {
  prompt("Must choose 1, 2, 3, 4, 5, or 6\n");
  operation = readline.question();
}
console.clear();

prompt('Enter the second number: ');
let number2 = readline.question();
while (invalidNumber(number2)) {
  prompt("Please enter a valid number!\n");
  number2 = readline.question();
}
console.clear();

let sum;
switch (operation) {
  case "1":
    operation = "+";
    sum = Number(number1) + Number(number2);
    break;
  case '2':
    operation = "-";
    sum = Number(number1) - Number(number2);
    break;
  case '3':
    operation = "*";
    sum = Number(number1) * Number(number2);
    break;
  case '4':
    operation = "/";
    if (number1 === 0) {
      sum = 0;
    } else if (number2 === 0) {
      console.log("Cannot divide by 0‬");
    } else {
      sum = Number(number1) / Number(number2);
    }
    break;
  case '5':
    operation = "^";
    if (number1 === 0) {
      sum = 0;
    } else {
      sum = Number(number1) ** Number(number2);
    }
    break;
  case '6':
    operation = "%";
    if (number2 === 0 ) {
      sum = number1;
    } else {
      sum = Number(number1) % Number(number2);
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
