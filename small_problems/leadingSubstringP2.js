const leadingSubstrings = string => {
  let result = '';
  return string.split('').map((ele => {
    result += ele;
    return result;
  }));
};

function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    substrings.push(leadingSubstrings(string.slice(startIndex)));
  }

  return substrings;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]