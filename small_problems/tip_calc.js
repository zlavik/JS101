const readline = require('readline-sync');


let billAmount = parseFloat(readline.question('How much was your bill?: '));

let tipRate = parseFloat(readline.question('Tip percentage?: '));

tipRate /= 100;

let tipTotal = billAmount * tipRate;
let totalOwe = billAmount + tipTotal;

console.log(`Tip : $${tipTotal} \nTotal : $${totalOwe}`);