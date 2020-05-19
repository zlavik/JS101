//What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// Answer: 36 because it didnt mutate answer so when line 11 it was 42 - 8