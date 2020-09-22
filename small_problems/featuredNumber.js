/*
Desciption:


Input: integer
output: integer or error


Rules:
is an odd number that is a multiple of 7
all of its digits occuring exactly once each

Examples:
49 is a featured number
98 is not (it is not odd)
97 is not (it is not a multiple of 7)
133 is not (the digit 3 appears twice)

Algorithm:
  find if number remainder is greater than 0 for 7
    return error if so
  find if number remainder is greater than 0 for 2
    return error if so
  find matching digits in the number
    return error if so
  find next featured number after


*/
function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirements."