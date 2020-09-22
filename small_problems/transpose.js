/*
Create a function that

input: nested array
output: nested array

Rules:
  must not mutate the original array

Examples:
  original: [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
  new:      [[1, 4, 3], [5, 7, 9], [8, 2, 6]]

  original: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  new:      [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

  original: [[2, 4, 6], [8, 12, 14], [17, 12, 6]]
  new:      [[2, 8, 17], [4, 12, 12], [6, 14, 6]]

Algorithm:
  create function named transpose
  create empty array named newMatrix inside function
  create a for loop that iterates through the numbers in the array
    create a for loop within the for loop 
      itierate through the subarrays grabbing the first number and pushing it in the first element
      after its run 3 times push 2nd elements into 2nd element in bewmatrix
  return newmatrix

*/


const matrix = [[2, 4, 6], [8, 12, 14], [17, 12, 6]];

let newMatrix = transpose(matrix);

function transpose(array) {
  let newArray = [];

  for (let idx = 0; idx < array.length; idx++) {
    newArray.push([]);
    for (let idx2 = 0; idx2 < array.length; idx2++) {
      newArray[idx].push(array[idx2][idx]);
    }
  }
  return newArray;
}

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]