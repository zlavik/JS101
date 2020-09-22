/*
Desciption:
Write a function that takes a string as argument, and returns true if all
parentheses in the string are properly balanced, false otherwise. To be
properly balanced, parentheses must occur in matching '(' and ')' pairs.

Input: string
output: boolean


Rules:
must start with ( and have a closing )

Examples:


Algorithm:

*/


// eslint-disable-next-line max-lines-per-function
function isBalanced(string) {
  let parentheses = 0;


  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      parentheses += 1;
    } else if (string[index] === ')') {
      parentheses -= 1;
    }
    if (parentheses < 0) return false;
  }

  return parentheses === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);