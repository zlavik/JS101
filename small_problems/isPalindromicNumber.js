function isPalindromicNumber(number) {
  let reversedNumber = String(number).split('').reverse().join('').replace(/[^a-z0-9+]+/gi, '');
  return number === Number(reversedNumber);
}

console.log(isPalindromicNumber(34543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true
