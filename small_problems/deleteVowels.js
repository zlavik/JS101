function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

// or

function removeVowels_(stringArray) {
  return stringArray.map(string => {
    let chars = string.split("");
    let removedVowels = deleteVowels(chars);
    return removedVowels.join("");
  });
}

function deleteVowels(array) {
  const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return array.map(char => {
    if (VOWELS.indexOf(char) >= 0) {
      return "";
    } else {
      return char;
    }
  });
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]