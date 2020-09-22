/*
Write a function that takes a positive integer, n, as an argument, and logs
a right triangle whose sides each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should have one end at the lower-left
of the triangle, and the other end at the upper-right.


Input: positive number
output: logs a string that contains a right triangle

Examples:
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Rules:

Algorithm:
  - declare a function addEmptyString with a peramter of a given number
    -declare a variable that contains the empty spaces
    - while loop index less then num
      - add num - 1 of spaces

*/

function triangle(num) {
  let emptyString = ' ';
  let stars = '*';
  let triangle = '';

  for (let index = 1; index <= num; index++) {
    triangle = emptyString.repeat(num - index) + stars.repeat(index);
    console.log(triangle);
  }

}

triangle(13);