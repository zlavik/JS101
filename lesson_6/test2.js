/*
Write a function that takes one argument, a positive integer, and returns
a string of alternating '1's and '0's, always starting with a '1'. The
length of the string should match the given integer.


Input: positive integer
output: string of 1's and 0's

Rules:
Should start with '1'
The length of string should match the given integer

Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Algorithm:
  - declare a function stringy with a paremeter 'number'
  - declare a variable string that gets returned at the end of stringy
  - declare a global string '10'
  - 

*/

const PATTERN = '10';

function stringy(num) {
  let string = ``;

  if (num % 2 === 0) {
    string = `${PATTERN.repeat(num / 2)}`;
  } else if (num % 2 === 1) {
    string = `${PATTERN.repeat((num - 1) / 2)}` + '1';
  }
  return string;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"