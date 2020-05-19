// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // => one
console.log(`two is: ${two}`); // => two
console.log(`three is: ${three}`); // => three
// function doesn't return value


function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // => one
console.log(`two is: ${two}`); // => two
console.log(`three is: ${three}`); // => three
// function does not return value


function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // => two
console.log(`two is: ${two}`); // => three
console.log(`three is: ${three}`); // => one
