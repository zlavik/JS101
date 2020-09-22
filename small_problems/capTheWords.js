function wordCap(string) {
  let words = [];

  string.split(' ').forEach(word => {
    words.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  });

  return words.join(' ');
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'