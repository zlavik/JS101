

function findOdd(listOfNumbers) {
  let count = listOfNumbers.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue] ? accumulator[currentValue] + 1 : 1;
    return accumulator;
  }, {});

  return count;
}


findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]);
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]);
findOdd([10]);
findOdd([1,1,1,1,1,1,10,1,1,1,1]);
findOdd([5,4,3,2,1,5,4,3,2,10,10]);