function wordSizes(string) {
  let arryString = string.replace(/[^a-z0-9 +]+/gi, '').split(' ');
  let objWordSizes = {};

  for (let index = 0; index < arryString.length; index++) {
    let wordSizes = arryString[index].length;
    if (wordSizes === 0) {
      continue;
    }

    if (!objWordSizes[wordSizes]) {
      objWordSizes[wordSizes] = 0;
    }
    objWordSizes[wordSizes] += 1;
  }
  return objWordSizes;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}