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

const cache = { 1: 1, 2: 1 };
let invocations = 0; // Just to count how often we invoke our function

function fibonacci(nth) {
  invocations += 1; // Count your invocation
  let nth1 = cache[nth - 1]; // Step 1
  if (!nth1) nth1 = fibonacci(nth - 1); // Step 2

  return (cache[nth] = nth1 + cache[nth - 2]); // Step 3 & 4
}

console.log(fibonacci(55), invocations); // 13 in 5 invocations
