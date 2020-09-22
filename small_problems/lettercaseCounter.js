function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];


  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

// or

function letterCaseCount_(string) {
  let count = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (char >= 'a' && char <= 'z') {
      count.lowercase++;
    } else if (char >= 'A' && char <= 'Z') {
      count.uppercase++;
    } else {
      count.neither++;
    }
  }
  return count;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }