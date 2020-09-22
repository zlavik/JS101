function staggeredCase(string, ignoreNoneAlphabetic = false) {
  let result = '';
  let count = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (isAlphabeticChar(char)) {
      if (!ignoreNoneAlphabetic) {
        count++;
        result += count % 2 !== 0 ? char.toUpperCase() : char.toLowerCase();
      } else {
        result += idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      }
    } else {
      result += char;
    }
  }
  return result;
}


function isAlphabeticChar(word) {
  const regex = /[a-z]/gi;
  return regex.test(word);
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(
  staggeredCase('I Love Launch School!', true) === 'I LoVe lAuNcH ScHoOl!'
);
console.log(staggeredCase('ALL_CAPS', true) === 'AlL_CaPs');
console.log(
  staggeredCase('ignore 77 the 444 numbers', true) === 'IgNoRe 77 ThE 444 NuMbErS'
);