const readline = require('readline-sync');

let number = Number(readline.question("Enter a number: "));

number = isOdd(number);
function isOdd (number) {
  if (Math.abs(number) % 2 === 1) {
    console.log(`${number} is odd`);
  } else {
    console.log(`${number} is even`);
  }
}