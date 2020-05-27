// Question 7:
// Given the following code, what will the final values
// of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b]; // => [2, [5,8]]

arr[0] += 2; // => [4, [5,8]]
// 2 = 2 + 2 => 4
arr[1][0] -= a; // => [4, [3, 8]]
// [5] = 5 - 2 => 3
// Answer: [4, [3, 8]]