const readline = require('readline-sync');

let sum = 0;
let product = 1;

let num = Number(readline.question("Please enter an integer greater than 0: "));
console.log('Enter "s" to compute the sum, or "p" to compute the product: ');
let operation = readline.prompt();

for (let counter = 1; counter <= num; counter += 1) {
  if (operation === "s") {
    sum += counter;
  } else {
    product *= counter;
  }
}

if (operation === "s") {
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
} else if (operation === "p") {
  console.log(`The product of the integers between 1 and ${num} is ${product}.`);
} else {
  console.log('Unknown operation.');
}