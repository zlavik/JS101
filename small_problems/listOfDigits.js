/*
Desciption:


Input: one number (positive ubteger)
output: array of all the digits in the number


Rules:

Examples:


Algorithm:

*/

function digitList(number) {
  let arrNum = String(number).split('');
  let digits = [];

  for (let index = 0; index < arrNum.length; index++) {
    digits.push(arrNum[index] - '');
  }

  return digits;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]