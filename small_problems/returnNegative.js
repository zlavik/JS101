function negative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}
// or
// const negative = number => number < 0 ? number : -number;


console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0