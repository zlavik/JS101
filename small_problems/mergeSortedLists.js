/*
Write a function that takes two sorted arrays as arguments,
and returns a new array that contains all the elements from both
input arrays in sorted order.

input: 2 sorted arrays
output: 1 sorted array from both arrays

Rules:
solution should not mutate the input arrays.
may not provide any solution that requires you to sort the result array.
You must build the result array one element at a time in the proper order.

Examples:
merge([1, 2, 3], [2, 3, 4]);      // [1, 2, 2, 3, 3, 4]

Algorithm:
  declare mergedArray
  declare sortedMergedArray
  merge two arrays into one (concat)
  using reduce if current value is bigger then
    accumulator then push accumulator into array

*/
function compareNumbers(a, b) {
  return a - b;
}

function merge(array1, array2) {
  let mergedArray = array1.concat(array2);
  let sortedMergedArray = [];
  mergedArray.reduce((acc, cur, idx ) => {
    let currentlySmallestNum = 0;
    for (let innerIdx = 0; innerIdx < mergedArray.length; innerIdx++) {
      if (cur < mergedArray[innerIdx] && ) {

      }
    }
  }, mergedArray[0]);
  return sortedMergedArray;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]
// console.log(merge([1, 2, 3], [2, 3, 4]));      // [1, 2, 2, 3, 3, 4]