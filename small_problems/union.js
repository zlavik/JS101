function union (numArray1, numArray2) {
  let combinedArr = [...numArray1, ...numArray2];
  let result = [];

  combinedArr.forEach(element => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
}


union([1, 2, 3], [1, 4, 3, 5]); // [1, 2, 3, 4, 5]
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]