function staggeredCase(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (idx % 2 === 0) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  console.log(result);
}

// or

function staggeredCase_(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"