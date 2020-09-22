/*
Desciption:


Input:number, last count digits to rotate
output: rotated number


Rules:
  Rotate the last count digits of the original number.
  Leave the first digits (not part of the last count digits) in the same order.
  Apply the same rule for the rotation as in the previous exercise: slice off
   the first of the digits that you want to rotate, and append it to the end of
   the number.
  Join the first digits with the last count rotated digits, and return it as a 
    number.

Examples:


Algorithm:
    convert the original number to a string
    split the string into two parts: the part to remain unchanged and the part to be rotated
    rotate the second part
    join the first part back together with the rotated second part
    convert the string to a number and return it

*/

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  console.log(firstPart, secondPart);
  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917