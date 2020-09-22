/*
Desciption:
Write a function that takes an array of integers as input, multiplies
all of the integers together, divides the result by the number of entries
in the array, and returns the result as a string with the value
rounded to three decimal places.

Input: array of intergers
output: string


Rules:

Examples:


Algorithm:


*/

function multiplicativeAverage(intArray) {
  let result = 1;

  for (let index = 0; index < intArray.length; index++) {
    result *= intArray[index];
  }

  return (result / intArray.length).toFixed(3);

}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"