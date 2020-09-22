/*
Desciption:


Input:
output:


Rules:

Examples:


Algorithm:


*/


function sumSquareDifference(num) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let idx = 1; idx <= num; idx++) {
    sum += idx;
    sumOfSquares += idx ** 2;
  }

  return (sum ** 2) - sumOfSquares;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150