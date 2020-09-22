/*
Create a function that

input: nested array
output: nested array

Rules:
  must not mutate the original array

Examples:

Algorithm:
  */


const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

function transpose(array) {
  let transposed = [];

  for (let rowIdx  = 0; rowIdx  < array[0].length; rowIdx++) {
    transposed.push([]);
    for (let colIdx  = 0; colIdx  < array.length; colIdx++) {
      transposed[rowIdx].push(array[colIdx ][rowIdx ]);
    }
  }
  return transposed;
}

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]