/*
Desciption:


Input: 3 numbers
output: string 'equilateral', 'isosceles', 'scalene', or 'invalid'.


Rules:

sumOfShortestNum of 2 shortest lengths must be > the length of the longestNum side
every side must be > 0
both must be true

Examples:


Algorithm:
  find longestNum number
  add two shortest numbers together
  if shorests number sumOfShortestNum < longestNum number return invalid
  if any numbers = 0 return invalid

  if all 3 numbers are === all 3 numbers return equilateral
  else if 2 numbers are === length but 3rd is diffrent return isosceles
  else return scalene

*/


function triangle(num1, num2, num3) {
  let numArray = [num1, num2, num3];
  let longestNum = Math.max(num1, num2, num3);
  let shortestNum = Math.min(num1, num2, num3);
  let sumOfShortestNum = (num1 + num2 + num3) - longestNum;
  let matches = 0;

  if (sumOfShortestNum < longestNum || shortestNum === 0) return 'Invalid';

  for (let idx = 0; idx < numArray.length; idx++) {
    for (let idx2 = idx + 1; idx2 < numArray.length; idx2++) {
      if (numArray[idx] === numArray[idx2]) matches += 1;
    }
  }

  if (matches > 1) return 'Equilateral';
  if (matches === 1) return 'Isosceles';
  return 'Scalene';
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"