function leadingSubstrings(string) {
  let substrings  = [];

  substrings.push(string[0]);

  if (string.length > 1) {
    for (let index = 1; index < string.length; index++) {
      for (let index2 = index - 1; index2 < string.length - 1; index2++) {
        substrings.push(substrings [index2] + string[index]);
        index++;
      }
    }
  }

  // console.log(substrings);
  return substrings;
}

// or

function leadingSubstrings_(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

// or

function substringsAtStart__(string) {
  let array = [];
  for (let idx = 1; idx <= string.length; idx++) {
    array.push(string.substring(0, idx));
  }
  return array;
}

// or

const substringsAtStart = string => {
  let result = '';
  return string.split('').map((ele => {
    result += ele;
    return result;
  }));
};

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
