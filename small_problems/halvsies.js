/*
Desciption:
Write a function that takes an array as an argument, and returns an array that
contains two elements,each of which is an array. Put the first half of the
original array elements in the first element of the return value, and
put the second half in the second element. If the original array contains an
odd number of elements, place the middle element in the first half array.

Input: array
output: nested array


Rules:

Examples:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

Algorithm:
  -

*/

function halvsies(numArray) {
  let nestNumArray = [[], []];

  for (let idx = 0; idx <= (numArray.length - 1) / 2; idx++) {
    nestNumArray[0].push(numArray[idx]);
  }

  if (numArray.length % 2 === 1) {
    for (let idx = (numArray.length + 1) / 2; idx < numArray.length; idx++) {
      nestNumArray[1].push(numArray[idx]);
    }
  } else {
    for (let idx = (numArray.length) / 2; idx < numArray.length; idx++) {
      nestNumArray[1].push(numArray[idx]);
    }
  }

  console.log(nestNumArray);
}

function halvsies2(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]