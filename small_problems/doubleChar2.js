
const CONSONANTS = 'qwrtyplkjhgfdszxcvbnm';

function repeater(string) {
  let stringArray = [];

  for (let index = 0; index < string.length; index++) {
    stringArray.push(string[index]);
    if (CONSONANTS.indexOf(string[index].toLowerCase()) >= 0) {
      stringArray.push(string[index]);
    }
  }

  return stringArray.join('');
}

// or

// function repeater_(string) {
//   return string.split("").map(char => char + char).join("");
// }

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""