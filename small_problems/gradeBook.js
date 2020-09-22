/*
Write a function that determines the mean (average) of the
three scores passed to it, and console.log( th)e letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need
to check for negative values or values greater than 100.

Input: 3 numbers
output: string

Rules:

Algorithm:
  -

*/
function displayGrade (num) {
  if (90 <= num && num <= 100) console.log('A');
  if (80 <= num && num < 90) console.log('B');
  if (70 <= num && num < 80) console.log('C');
  if (60 <= num && num < 70) console.log('D');
  if (0 <= num && num < 60) console.log('F');
}

function getGrade(num1, num2, num3) {
  let averageGrade = (num1 + num2 + num3) / 3;
  displayGrade(averageGrade);
}


getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"