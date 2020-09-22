/*
https://www.codewars.com/kata/55c04b4cc56a697bb0000048
input: two strings, one is a jumbled string, and the other one is what to find
  in the junmbled string.
output: true or false boolean

Algorithm:
  iterate through matching word
  look for matches in the jumbled word
    if found splice that index
      count++
  return count === matchingWord.length;

Algorithm2:
  find all occurences of characters in both strings
    reduce?
  check if there are more or equal keys from first string to second string
    if they all pass, return true every?
*/

// function scramble(str1, str2) {
//   let junmbledWord = str1.split('');
//   let matchingWord = str2.split('');
//   let count = 0;

//   matchingWord.forEach(letter => {
//     let matchingIdx = junmbledWord.indexOf(letter);

//     if (matchingIdx !== -1) {
//       junmbledWord.splice(matchingIdx, 1);
//       count++;
//     }
//   });
//   return count === str2.length;
// }

function compare(maxNum, num) {
  return maxNum === maxNum(num);
}
function maxNum(num) {
  return String(num).split('').sort((a,b) => b - a).join('') - '';
}

function nextBigger(n){
  let maxNum = maxNum(n);
  let newNum = n;
  
  while (compare(maxNum, newNum)) {
  newNum++;
  }
  
  return newNum;
}

function scramble(str1, str2) {
  let jumbledWord = findOccurences(str1);
  let toMatch = findOccurences(str2);
  return Object.keys(toMatch).every((key) => jumbledWord[key] >= toMatch[key]);
}

console.log(scramble('rkqodlw','world'));