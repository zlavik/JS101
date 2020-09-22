/*
https://www.codewars.com/kata/541c8630095125aba6000c00
*/

function digitalRoot(numbers) {
  let numArray = String(numbers).split('');

  while (numArray.length > 1) {
    numArray = String(numArray.reduce((total, current) =>
      Number(total) + Number(current))).split('');
  }
  return Number(numArray.join());
}

console.log(digitalRoot(456));