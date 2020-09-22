/*
given a non-empty string check if it can be
constructed by taking a substring of it and
appending multiple copies of the substring together.
you may assume the given string consists of lowercase only.


input: non empty string
output: boolean true of false

Rules:

Examples:
input 'abab'
output true
its the substring 'ab' twice

input 'aba'
output false
no matching substrings

Algorithm:
  declare substring that will start idx 0 of given string
  compare if substring[idx] matches

*/

// function getpatternLength(string) {
//   let substring = [];

//   if (string.length % 2 === 0) {
//     for (let idx = 0; idx < string.length / 2; idx++) {
//       substring.push(string[idx]);
//     }
//     return string.length / 2;
//   } else {
//     for (let idx = 0; idx < string.length / 3; idx++) {
//       substring.push(string[idx]);
//     }
//     return Math.ceil((string.length) / 3);
//   }
// }

// function compare(pattern, string) {

//   for (let idx = 0; idx < string.length; idx++) {
//     for (let idx2 = 0; idx2 < pattern.length; idx2++) {
//       if (string[idx] !== pattern[idx2]) return false;
//       idx++;
//     }
//     idx--;
//   }
//   return true;
// }

// function repeatedSubstringPattern(string) {
//   let patternLength = getpatternLength(string);

//   if (string.length % 2 === 0) {
//     let leftHalf = string.slice(0, patternLength);
//     let rightHalf = string.slice(patternLength, string.length);
//     return leftHalf === rightHalf;
//   } else if (string.length % 3 === 0) {
//     let pattern = string.slice(0, patternLength);
//     return compare(pattern, string);
//   } else {
//     let pattern = string.slice(0, 1);
//     return compare(pattern, string);
//   }
// }

function repeatedSubstringPattern(string) {
  let substring = '';
  let maxIdx = Math.floor(string.length / 2);

  for (let idx = 0; idx < maxIdx; idx++) {
    let substringLenth = idx + 1;
    substring = string.slice(0, substringLenth);
    if (substring.repeat(string.length / substringLenth) === string) {
      return true;
    }
  }
  return false;
}


console.log(repeatedSubstringPattern('abab') === true);
console.log(repeatedSubstringPattern('aba') === false);
console.log(repeatedSubstringPattern('aabaaba') === false);
console.log(repeatedSubstringPattern('aaaaaaa') === true);
console.log(repeatedSubstringPattern('abcabcabc') === true);
console.log(repeatedSubstringPattern('abaababaab') === true);
console.log(repeatedSubstringPattern('abcabcabcabc') === true);