/*
Desciption:


Input: array of integers
output: returns average of all integers in the array 
rounded down to the integer component of the average


Rules:

Examples:


Algorithm:

*/

function average(intArr) {
  let sum = 0;

  for (let idx = 0; idx < intArr.length; idx++) {
    sum += intArr[idx];
  }

  sum = Math.floor(sum / intArr.length);
  return sum;
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40