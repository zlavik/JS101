/*
write a function scramble(str1, str2) that returns
true if a portion of str1 characters can be rearranged
to match str2, otherwise return false.

input: 2 strings str1 and str2
output: boolean true of false

Rules:
only lowercase letters will be used.

Examples:


Algorithm:
  split both strings into seperate arrays
  iterate through str2 and str1 (for(for) loop)
    if str[idx] === str2[idx2]
      push str2[idx] into another array
      slice current idx2?
      end 2nd forloop

  return str2 === result

*/


function scramble(str1, str2) {
  let jumbledWord = str1.split('');
  let matchingWord = str2.split('');
  let result = [];

  for (let idx1 = 0; idx1 < matchingWord.length; idx1++) {
    for (let idx2 = 0; idx2 < jumbledWord.length; idx2++) {
      if (matchingWord[idx1] === jumbledWord[idx2]) {
        result.push(jumbledWord[idx2]);
        jumbledWord.splice(idx2, 1);
        idx2 = jumbledWord.length;
      }
    }
  }
  return str2 === result.join('');
}

console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);