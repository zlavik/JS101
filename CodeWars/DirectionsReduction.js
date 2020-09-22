/*

https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

*/
const USELESS_DIRECTION = {
  NORTH : 'SOUTH',
  SOUTH : 'NORTH',
  EAST : 'WEST',
  WEST : 'EAST'
};

function findDup(direction) {
  let reducedDir = [];
  for (let idx = 0; idx <= direction.length; idx++) {
    for (let idx2 = idx + 1; idx2 <= direction.length; idx2++) {
      if (direction[idx] === USELESS_DIRECTION[direction[idx2]]) {
        direction.splice(idx, 2);
        idx2 -= 1;
      } else {
        reducedDir.push(direction[idx]);
        idx++;
      }
    }
  }
  return reducedDir;
}


function dirReduc(direction) {
  let reducedDir = findDup(findDup(direction));
  return reducedDir;
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST",
  "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));

console.log(dirReduc(['WEST', 'EAST', 'NORTH', 'SOUTH', 'SOUTH', 'WEST', 'WEST', 'EAST', 'NORTH', 'SOUTH']));
console.log(dirReduc(['WEST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'WEST', 'SOUTH', 'NORTH']));
console.log(dirReduc(['SOUTH', 'NORTH', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'WEST', 'NORTH', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'EAST', 'WEST']));
