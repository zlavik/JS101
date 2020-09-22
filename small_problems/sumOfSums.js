const reducer = (accumulator, currentValue) => accumulator + currentValue;

function sumOfSums(numbers) {
  let sum = 0;
  let arrNum = [];

  for (let idx = 0; idx < numbers.length; idx++) {
    arrNum.push(numbers[idx]);
    sum += arrNum.reduce(reducer);
  }
  return sum;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35