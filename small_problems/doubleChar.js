/*
Desciption:
Write a function that takes a string, doubles every
character in the string, and returns the result as a new string.

Input: string
output: string


Rules:

Examples:


Algorithm:

*/

function repeater(string) {
  let stringArray = [];

  for (let index = 0; index < stringArray.length; index++) {
    stringArray.push(string[index] + string[index]);
  }

  return stringArray.join('');
}

// or

function repeater_(string) {
  return string.split("").map(char => char + char).join("");
}

repeater('Hello');        // "HHeelllloo"
repeater_('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""