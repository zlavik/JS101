/*

input: the total number of switches
output: arrayy of lights that are on after input passes

Rules:


Examples:


Algorithm:

*/
function initializeBoard(switches) {
  let switchBoard = {};
  for (let idx = 1; idx <= switches; idx++) {
    switchBoard[idx] = 'on';
  }
  return switchBoard;
}

function switchLight(light) {
  let currentLight = light === 'on' ? light = 'off' : light = 'on';
  return currentLight;
}

function findStateOfSwitches(switches) {
  let switchBoard = initializeBoard(switches);
  let round = 2;

  while (round <= switches) {
    for (let currentswitch = 2; currentswitch <= switches; currentswitch++) {
      if (currentswitch % round === 0) {
        switchBoard[currentswitch] = switchLight(switchBoard[currentswitch]);
      }
    }
    round++;
  }

  return switchBoard;
}

function lightsOn(switches) {
  let finalBoard = findStateOfSwitches(switches);
  let length = Object.keys(finalBoard).length;
  let lightsThatAreOn = [];

  for (let currentLight = 1; currentLight <= length; currentLight++) {
    if (finalBoard[currentLight] === 'on') {
      lightsThatAreOn.push(currentLight);
    }
  }
  return lightsThatAreOn;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]