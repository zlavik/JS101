var fs = require('fs');
let rlSync = require('readline-sync');
console.clear();

let lessonOn = Number(rlSync.question('What lesson are you on? lesson_'));

let numQuestions = Number(rlSync.question('How many questions are there?: '));

function createBlankJsFiles (num) {
  for (let index = 1; index <= num; index += 1) {
    fs.appendFile(`lesson_${lessonOn}/question${index}.js`, `// Question ${index}:\n// `, function (err) {
      if (err) throw err;
    });
  }
  console.log(`Created ${numQuestions} files!`);
}

createBlankJsFiles(numQuestions);