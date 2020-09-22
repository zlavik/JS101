const MAX_DEGREE = 360;
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;


function getMin(number) {
  let minutes = Math.floor((number  - Math.floor(number)) * MINUTES_PER_DEGREE);

  return addZeros(minutes);
}

function getSec(number) {
  let seconds = Math.floor(
    (number - Math.floor(number) - (getMin(number) / MINUTES_PER_DEGREE)) *
  SECONDS_PER_DEGREE
  );
  return addZeros(seconds);
}

function dms(num) {
  let degree;
  let min = getMin(num);
  let sec = getSec(num);

  if (num < 0) {
    degree = MAX_DEGREE + num;

    while (degree < 0) {
      degree = MAX_DEGREE + degree;
    }

  } else if (num > MAX_DEGREE) {
    degree = num - MAX_DEGREE;

    while (degree > MAX_DEGREE) {
      degree -= MAX_DEGREE;
    }

  } else {
    degree = Math.floor(num);
  }


  console.log(`${degree}˚${min}'${sec}"`);
}

function addZeros(num) {
  let numStr = String(num);
  if (numStr.length < 2) {
    numStr = '0' + numStr;
  }
  return numStr;
}

// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"