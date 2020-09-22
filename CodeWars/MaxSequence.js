/*
https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
*/

function findSums(array) {
  let sums = [];

  for (let idx = 0; idx < array.length; idx++) {
    let currentValue = 0;
    currentValue += array[idx];
    for (let idx2 = idx + 1; idx2 < array.length; idx2++) {
      currentValue += array[idx2];
    }
    sums.push(currentValue);
  }
  return sums;
}


function sort(arr) {
  arr.sort((a,b) => b - a);
  console.log(arr);
  return arr[0];
}

function findSumsTakenAway(array, allSums) {
  let score = [];
  for (let idx = 0; idx < allSums.length; idx++) {
    let currentValue = allSums[idx];
    let tempScores = [];
    for (let idx2 = array.length - 1; idx2 > idx; idx2--) {
      if (array[idx2] < 0) {
        currentValue += (array[idx2] * -1);
      } else {
        currentValue -= array[idx2];
      }
      tempScores.push(currentValue);
    }
    score.push(sort(tempScores));
  }
  return score;
}

function allPositive(array) {
  let counter = 0;
  array.forEach(element => {
    if (element >= 0) {
      counter++;
    }
  });
  return counter === array.length;
}

function maxSequence(array) {
  let allSums = findSums(array);
  let score = sort(findSumsTakenAway(array, allSums));
  if (array.length === 0 || score < 0 || score === undefined) return 0;
  if (allPositive) return array.reduce((a, b) => a + b);
  return score;
}

//            0  1   2  3   4  5  6   7  8
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // => 6
//array^
//allsums   [ 1, 3,  2, 5,  1, 2, 0, -1, 4]