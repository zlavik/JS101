// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
let rlSync = require('readline-sync');

console.log("Calculator initated..\n")

let number1 = Number(rlSync.question('Enter the first number:\n'));

let operation = rlSync.question('What operation would you like to perform?\n1) (+) add\n2) (-) subtract\n3) (*) multiply\n4) (/) divide\n');

let number2 = Number(rlSync.question('Enter the second number:\n'));

let sum = theDeed(number1, number2);

function theDeed(number1, number2) {
if (operation == "add" || operation == "plus" || operation == "+" || operation == "1") {
  if (operation = 1) {
    operation = "+"
  }
  return number1 + number2;
} else if (operation == "subtract" || operation === "minus" || operation == "-" || operation == "2") {
  if (operation = 2) {
    operation = "-"
  }
  return  number1 - number2;
} else if (operation == "multiply" || operation === "times" || operation == "*" || operation == "3") {
  if (operation = 3) {
    operation = "*"
  }
  return  number1 * number2;
} else if (operation == "divide" || operation == "/" || operation == "4") {
  if (operation = 4) {
    operation = "/"
  }
  return  number1 / number2;
} else {
  console.log("Error try again!");
}
};
console.log(`${number1} ${operation} ${number2} = ${sum}`)
console.log("\nTerminating calculator..")
