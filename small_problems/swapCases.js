function swapCase(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (char >= 'a' && char <= 'z') {
      result += char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }
  return result;
}

// or

function swapCase_(string) {
  return string
    .split("")
    .map(char => {
      if ((char >= 'a') && (char <= 'z')) {
        return char.toUpperCase();
      } else if ((char >= 'A') && (char <= 'Z')) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"