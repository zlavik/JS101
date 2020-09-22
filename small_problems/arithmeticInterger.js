let readline = require('readline-Sync');

const OPERATIONS = ['+', '-', '*', '/', '%', '**'];

let firstNum = Number(readline.question("Enter the first number: "));
let secondNum = Number(readline.question("Enter the second number: "));

OPERATIONS.forEach((operator) => {
  // eslint-disable-next-line no-eval
  let result = eval(`${firstNum + operator + secondNum}`);
  console.log(`${firstNum} ${operator} ${secondNum} = ${Math.round(result)}`);
});