/*
Desciption:


Input: number (year)
output: number (how many times fridays which lands on the 13th day of the month)


Rules:
 You may assume that the year is greater than 1752
 You may also assume that the same calendar will remain
  in use for the foreseeable future.

Examples:


Algorithm:
  Iterate over all the months of the given year.
  For each month, get the day that falls on the 13th.
  Count the 13ths that fall on a Friday.
  Return the count.

*/

function fridayThe13ths(year) {
  let thirteenths = [];
  let count = 0;

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
    if (thirteenths[month].getDay() === 5) {
      count += 1;
    }
  }

  return count;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2