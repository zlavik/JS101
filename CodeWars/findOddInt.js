/*
https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
*/

function findCount(numbers) {
  let count = numbers.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue]
      ? accumulator[currentValue] + 1 : 1;
    return accumulator;
  }, {});
  return count;
}

function findOdd(listOfNumbers) {
  let count = findCount(listOfNumbers);

  for (let idx = 0; idx <  Object.keys(count).length; idx++) {
    if (Object.values(count)[idx] % 2 !== 0) {
      count = Object.keys(count)[idx];
    }
  }
  return Number(count);
}


console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));
// console.log(findOdd([10]));
// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
// console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));