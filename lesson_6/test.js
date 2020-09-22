function test(str) {
  str + "!!!"
}

let word = test("Hello");

if (word) {
  console.log("Hi");
} else {
  console.log("Goodbye");
}

// this logs
// line 5

/*
let animal = undefined;

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
};

speak(animal);


let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);

*/

//[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
/*
let nums = [[1, 2], [3, 4]];

nums.map(arr => console.log(arr[0]));
*/
// we are calling method map on nums variable INCORRECT

// you can't call methods on variables and you can't mutate variables


// arr parameter

//const test = num => {
//}

//test(5)

// functions are defined with parameters, invoked with arguments


// within the function test

// line 7

// logging line