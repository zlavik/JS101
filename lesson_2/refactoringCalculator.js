const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const VALID_OPERATORS = ['+', '-', '*', '/', '^', '%'];
const VALID_RESPONSES = ['y', 'Y', 'n', 'N'];
var CALCULATOR_ON_OFF = 'ON';
const LANGUAGE = 'en';
// Function to return message in correct language
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}
//message in correct language
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}
//making sure numbers are valid
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
console.clear();
//Main calculator
prompt('welcomeMsg');
do {
  prompt('firstNumber');
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt("invaildNumber");
    number1 = readline.question();
  }
  console.clear();

  prompt('operation');
  let operation = readline.question();
  while (operation.trimStart() === '' || !VALID_OPERATORS.includes(operation)) {
    prompt(`invaildOperation`);
    operation = readline.question();
  }
  console.clear();

  prompt('secondNumber');
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt("invaildNumber");
    number2 = readline.question();
  }
  console.clear();

  let result;
  switch (operation) {
    case "+":
      result = Number(number1) + Number(number2);
      break;
    case '-':
      result = Number(number1) - Number(number2);
      break;
    case '*':
      result = Number(number1) * Number(number2);
      break;
    case '/':
      result = Number(number1) / Number(number2);
      break;
    case '^':
      result = Number(number1) ** Number(number2);
      break;
    case '%':
      result = Number(number1) % Number(number2);
      break;
    default:
      console.log("Error invaild opperation!");
      break;
  }
  //incase of errors and printing final result
  if (result === undefined || isNaN(result)) {
    console.log("Error!");
  } else {
    prompt("finishCalc");
    console.log(`\n${number1} ${operation} ${number2} = ${result}\n`);
  }

  prompt('continue');
  let anotherCalculation = readline.question();
  while (anotherCalculation.trimStart() === '' ||
       !VALID_RESPONSES.includes(anotherCalculation)) {
    prompt('anotherCalcInvalid');
    anotherCalculation = readline.question();
  }
  switch (anotherCalculation.toUpperCase()) {
    case 'Y':
      CALCULATOR_ON_OFF = 'ON';
      break;
    default:
      CALCULATOR_ON_OFF = 'OFF';
      break;
  }
  console.clear();
} while (CALCULATOR_ON_OFF === 'ON');
// end of calculator code