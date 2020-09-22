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
  if (nth <= 2) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

