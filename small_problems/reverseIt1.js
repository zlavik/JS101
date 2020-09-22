
function reverseSentence(string) {
  let reversedString = string.split(' ').reverse().join(' ');
  // console.log(reversedString);
  return reversedString;
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"