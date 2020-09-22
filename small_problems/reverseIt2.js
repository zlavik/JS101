function reverseWords(string) {
  let words = string.split(' ');
  let reversedString = [];

  for (let index = 0; index < words.length; index++) {
    let currentWord = words[index];
    if (currentWord.length < 5) {
      reversedString.push(currentWord);
    } else {
      reversedString.push(reverseWord(currentWord));
    }
  }

  console.log(reversedString.join(' '));
}

function reverseWord (word) {
  return word.split('').reverse().join('');
}

// or

function reverseWords_ (string) {
  return string.split(" ")
    .map(word => (word.length < 5 ? word : word.split("")
      .reverse()
      .join("")))
    .join(" ");
}

// or

function reverseWords__ (str) {
  let splitString = str.split(' ');

  let answer = splitString.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });

  return answer.join(' ');
}



reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"