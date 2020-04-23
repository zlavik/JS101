const readline = require('readline-sync');
const SQUARE_FEET = 10.7639;

let roomLength;
let roomWidth;
let area;
let areaSqFt;

roomLength = Number(readline.question('Enter length of the room in meters:'));
roomWidth = Number(readline.question('Enter width of the room in meters:'));

area = roomLength * roomWidth;
areaSqFt = area * SQUARE_FEET;

console.log(`The area of the room is ${area} square meters (${areaSqFt} square feet).`);