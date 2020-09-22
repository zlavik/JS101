/*

input: array
output: array

Rules:

Examples:

Algorithm:


*/

// eslint-disable-next-line max-lines-per-function
function commonChars(array) {
  let word = array[0];
  let result = [];

  for (let idx = 0; idx < word.length; idx++) {
    let firstChar = word[idx];
    let count = 1;
    for (let idx2 = 1; idx2 < array.length; idx2++) {
      let secondWord = array[idx2];
      for (let idx3 = 0; idx3 < secondWord.length; idx3++) {
        let secondChar = secondWord[idx3];
        if (firstChar === secondChar) {
          count++;
        }
        continue;
      }
      if (count === array.length) {
        result.push(firstChar);
      }
      continue;
    }
  }
  return result;
}

console.log(commonChars(['a', 'b'])); // []
console.log(commonChars(['ab', 'bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
