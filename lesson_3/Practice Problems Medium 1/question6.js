// What do you think the following code will output?
let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// Answer: False

// Bonus: How can you reliably test if a value is NaN?
console.log(isNaN(nanArray[0]));