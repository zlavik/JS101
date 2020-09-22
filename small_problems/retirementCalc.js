let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age?: '));
let retirementAge = Number(
  rlSync.question('At what age do you wish to retire?: ')
);

let today = new Date();
let year = today.getFullYear();

let retirementYear = (retirementAge - age) + year;

console.log(`It's ${year}. You will retire in ${retirementYear}.`);
console.log(`You have only ${retirementYear - year} years of work to go!`);
