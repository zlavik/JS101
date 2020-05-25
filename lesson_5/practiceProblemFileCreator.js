var fs = require('fs');
let rlSync = require('readline-sync');
console.clear();

let num = Number(rlSync.question('How many questions are there?: '));
function createBlankJsFiles (num) {
  for (let index = 1; index <= num; index += 1) {
    fs.appendFile(`question${index}.js`, ' ', function (err) {
      if (err) throw err;
    });
  }
  console.log(`Created ${num} files!`);
}

createBlankJsFiles(num);