/*
https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript
*/

function humanReadable(seconds) {
  let humanTime = {
    HH : 0,
    MM : 0,
    SS : 0
  };
  for (let idx = 0; idx < seconds; idx++) {
    humanTime.SS += 1;
    if (humanTime.SS === 60) {
      humanTime.MM += 1;
      humanTime.SS = 0;
    }
    if (humanTime.MM === 60) {
      humanTime.HH += 1;
      humanTime.MM = 0;
    }
  }
  return `${pad(humanTime.HH)}:${pad(humanTime.MM)}:${pad(humanTime.SS)}`;
}
function pad(time) {
  return time < 10 ? '0' + time : time;
}

console.log(humanReadable(60));