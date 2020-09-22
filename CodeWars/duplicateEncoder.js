/*
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
*/
function findCount(array) {
  let count = array.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  },{});
  return count;
}
function duplicateEncode(word) {
  let letters = word.toLowerCase().split('');
  let count = findCount(letters);
  let newWord = '';

  for (let idx = 0; idx < letters.length; idx++) {
    count[letters[idx]] === 1 ? newWord += '(' : newWord += ')';
  }
  return newWord;
}
