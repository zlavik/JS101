function twice(num) {
  let numStr = String(num);
  let numLength = numStr.length;

  if (numLength % 2 === 0) {
    for (let index = 0; index <= numLength / 2; index++) {
      for (let index2 = numLength / 2; index <= numLength; index++) {
        if (numStr[index] === numStr[index2]) {
          return num;
        }
      }
    }
  }
  return num * 2;
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676