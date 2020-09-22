/*
Write a function that displays a four-pointed diamond in an nxn grid,
where n is an odd integer supplied as an argument to the function. You
may assume that the argument will always be an odd integer.

input: odd number
output: logs a number sized diamond

Rules:


Examples:

diamond(3);
// logs
 *
***
 *

diamond(1);
// logs
*

diamond(9);
// logs
    *    |
   ***   |
  *****  |
 ******* |
*********|
 ******* |
  *****  |
   ***   |
    *    |


Algorithm:


*/

const diamond = size => {
  let result = [];

  for (let count = 0; count < Math.ceil(size / 2); count += 1) {
    let row = "";

    row += " ".repeat(count);
    row += "*".repeat(size - (count * 2));

    result.push(row);

    if (count !== 0) {
      result.unshift(row);
    }
  }

  result.forEach(row => console.log(row));
};

function hollowDiamond(n) {
  let leadingSpaces, width;

  for (let row = 0; row < n; row += 1) {
    leadingSpaces = Math.abs(((n - 1) / 2) - row);
    width = n - (2 * leadingSpaces);
    if (width > 2) {
      console.log("*".padStart(leadingSpaces + 1) + " ".repeat(width - 2) + "*");
    } else {
      console.log("*".padStart(leadingSpaces + 1));
    }
  }
}

// diamond(1);
diamond(13);
// diamond(9);