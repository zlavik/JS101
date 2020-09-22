const readline = require('readline-sync');


function getName() {
  let answer = readline.question('What is your name?: ');
  return answer;
}

function displayGreetings(name) {
  if (name.endsWith('!')) {
    console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

displayGreetings(getName());