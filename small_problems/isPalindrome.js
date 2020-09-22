function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

console.log(isPalindrome('Madam')); // false
console.log(isPalindrome('Madam, I\'m Adam')); // false
console.log(isPalindrome("356a653")); // true
console.log(isPalindrome('123ab321')); // false
