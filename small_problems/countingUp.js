function sequence(num) {
  let numArry = [];

  for (let index = 1; index <= num; index++) {
    numArry.push(index);
  }
  return numArry;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]