function swap(string) {
  return string
    .split(' ')
    .map((word) =>
      (word.length > 1
        ? word.slice(-1) + word.slice(1, -1) + word[0]
        : word)
    ).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"