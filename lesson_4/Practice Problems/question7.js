// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// returns [undefined, 'bear'] When a function doesn't explicitly
// return something, it implicitly returns undefined.