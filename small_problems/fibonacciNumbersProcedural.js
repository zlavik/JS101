/*
Desciption:


Input: number location
output: fib number at numbers location


Rules:
  first 2 numbers are 1


Examples:
F(3)  1 + 1 = 2
F(4)  1 + 2 = 3
F(5)  2 + 3 = 5
F(6)  3 + 5 = 8
F(7)  5 + 8 = 13
F(8)  8 + 13 = 21
F(9)  13 + 21 = 34
F(10) 21 + 34 = 55
F(11) 34 + 55 = 89
F(12) 55 + 89 = 144

Algorithm:


*/
function fibonacci(nth) {
  let lastTwo = [1, 1];

  for (let idx = 3; idx <= nth; idx++) {
    lastTwo = [lastTwo[1], lastTwo[0] + lastTwo[1]];
  }
  console.log(lastTwo[1]);
}

fibonacci(1);
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050