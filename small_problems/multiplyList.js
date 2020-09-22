/*
Desciption:


Input: two arrays
output: single array


Rules:

Examples:


Algorithm:

*/

function multiplyList(array1, array2) {
  let result = [];

  for (let index = 0; index < array1.length; index++) {
    result.push(array1[index] * array2[index]);
  }
  console.log(result);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]