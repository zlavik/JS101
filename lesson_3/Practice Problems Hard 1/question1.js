// Will the following functions return the same results?
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());// => 'hi there'
console.log(second());// => returns undefined

// no it will not return same results because line 9 return makes the rest of the code unreachable.