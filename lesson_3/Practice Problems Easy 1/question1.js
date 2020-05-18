// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// Answer: no, it will return [1,2,3,<3 empty items>, 5]

//bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

// Answer: undefined