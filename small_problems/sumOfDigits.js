function sum(number) {
  return String(number)
    .split("")
    .reduce((accum, digit) => accum + Number(digit), 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45