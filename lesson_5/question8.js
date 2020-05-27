// Question 8:
// Using the forEach method, write some code to output all
// vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

/* Pseudocode
set vowelsInObj
set vowels
convert obj to array using split
for each letter if current letter has a letter
from vowels save it to vowelsinObj
display vowelsInObj
*/


let vowels = 'aeiou';
Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});