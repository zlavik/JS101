// What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

// it will return [undefined, undefined, undefined] there's no explicit return statement in the callback