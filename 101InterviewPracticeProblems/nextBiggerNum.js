/*

input: positive number
output: next bigger number formed by the same digits

Rules:
if no bigger return -1


Examples:
nextBiggerNum(9) // -1
nextBiggerNum(111) // -1
nextBiggerNum(12) // 21
nextBiggerNum(2017) // 2071
nextBiggerNum(123456789) // 123456798

Algorithm:
  check if the length of the number is 1
    if so return -1
  check if all digits match
    if so return -1
  check if number is === number sorted (a - b)
    if so return -1
  check if last number is greater than last number - 1;
    two for loops?
    if so change those numbers and return it

*/
function maxNumber(num) {
  return Number(String(num).split('').sort((a,b) => b - a).join(''));
}

function nextBiggerNum(num) {
  let num2 = num + 1;

  if (num === maxNumber(num)) return -1;
  while (maxNumber(num) !== maxNumber(num2)) {
    num2++;
  }
  return num2;
}

console.log(nextBiggerNum(9) === -1); // -1
console.log(nextBiggerNum(111) === -1); // -1
console.log(nextBiggerNum(12) === 21); // 21
console.log(nextBiggerNum(15) === 51); // 51
console.log(nextBiggerNum(2017) === 2071); // 2071
console.log(nextBiggerNum(123456789) === 123456798); // 123456798
console.log(nextBiggerNum(54321) === -1); // -1
console.log(nextBiggerNum(531) === -1); // -1
console.log(nextBiggerNum(513) === 531); // 531
console.log(nextBiggerNum(5134) === 5143); // 5143