/*
Create a function that

input: nested array
output: nested array

Rules:
  must not mutate the original array

Examples:

Algorithm:
  */

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(array) {
  let rotated90 = [];

  for (let rowIdx  = 0; rowIdx  < array[0].length; rowIdx++) {
    rotated90.push([]);
    for (let colIdx  = array.length - 1; colIdx >= 0; colIdx--) {
      rotated90[rowIdx].push(array[colIdx][rowIdx]);
    }
  }
  return rotated90;
}

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
//                                 20 10 00   21 11 01   22 12 02
//                                 CR CR CR   CR CR CR   CR CR CR
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]