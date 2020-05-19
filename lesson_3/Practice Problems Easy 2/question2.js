/* The Array.prototype.reverse method reverses the
order of elements in an array, and Array.prototype.sort
can rearrange the elements in a variety of ways,
including descending. Both of these methods mutate the original
array as shown below. Write two distinct ways of
reversing the array without mutating the original array. Use reverse
for the first solution, and sort for the second. */

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Answer:
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]
// and 
let numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]
/*
Bonus 1: Can you do it using the Array.prototype.forEach() method?

Bonus 2: Can you do it using the Array.prototype.reduce() method?
*/

// Answer:
let numbers = [1, 2, 3, 4, 5];
let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]
// and
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.reduce((acc, num) => ([num, ...acc]), []);
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]