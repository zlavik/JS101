/*
Desciption:
Write a function that combines two arrays passed as arguments,
and returns a new array that contains all elements from both array
arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and
that they have the same number of elements.

Input: two arrays
output: one array with alternating values from the two arrays


Rules:

Examples:


Algorithm:

*/
// Option 1
function interleave(array1, array2) {
  let result = [];

  for (let idx = 0; idx < array1.length; idx++) {
    result.push(array1[idx], array2[idx]);
  }
  return result;
}

// Further exploration
function interleave_(array1, array2) {
  let result = [];

  array1.forEach((element, idx) => {
    result.push(element, array2[idx]);
  });
  return result;
}

function interleave__(array1, array2) {
  return array1.map((element, idx) => {
    return [element].concat(array2[idx]);
  }).flat();
}

function interleave___(array1, array2) {
  return array1.reduce((acc, curr, idx) => {
    return [...acc, curr, array2[idx]];
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

console.log(interleave_([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

console.log(interleave__([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

console.log(interleave___([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]