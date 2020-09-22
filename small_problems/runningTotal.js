function runningTotal(numbers) {
  let sum = 0;

  let totalArr = numbers.map((num) => {
    sum += num;
    return sum;
  }
  );
  return totalArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]