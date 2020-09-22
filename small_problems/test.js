/*
input:
  string of numbers
output:
  missing number or -1 for error or no number missing
Rules:
  sequence is in ascending order
  only one missing number should be returns
  if more than one number is missing return -1

Examples
  123456891011121415
   1 + 1 = 2? + 1 = 3? + 1 = 4?
   0       1        2        3
   numbers formated
   [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 15] //Dont need to store these

   missing numbers
   [7, 13] returns -1 // because length is more than 1

Algorithem:
  -find where the number places
    -find number format
      -check if first number increases by one and second number and 3rd?
      thats where we start : takes first 2 numbers and check if they ++
      keep going until we find the format
  -iterate through the numbers
    -declare first number and second number
      -first number should equal the first element
        -firstNumber = numbers[idx] if number formated by 1
        -firstNumer = numbers
    -format is 1? iterate through each number
    -format is 2? take 0,1 to current number and increase
  -increase number taken from the number list by 1 every 10 numbers
  -count up from the number by one
    -if next number doesnt add up to current number + 1 then store it in
    missing numbers array
  -check missing numbers array length and the moment it goes up to 2
  stop the search and return -1
  -return first element in missing number

*/
function findMatches(num) {
  let matches = 0;
  for (let idx = 0; idx < num.length; idx++) {
    if (Number(num[idx]) + 1 === Number(num[idx + 1])) {
      matches++;
    }
  }
  return matches;
}

function format(num) {
  let placeValue = 0;
  let matches = findMatches(num);
  let formatedNum = [];

  // while () {

  // }
  console.log(num.length, matches);
  return matches;
}

function missing(num) {
  let formatedNumbers = format(num);
  let missingNumbers = [];
  for (let idx = 0; idx < formatedNumbers.length; idx++) {
    let num1 = formatedNumbers[idx];
    let num2 = formatedNumbers[idx + 1];
    if (num1 + 1 !== num2) missingNumbers.push(num1 + 1);
    if (missingNumbers.length > 1) return -1;
  }
  return missingNumbers[0];
}


console.log(format("123567"));