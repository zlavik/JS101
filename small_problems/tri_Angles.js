/*
Desciption:


Input: 3 numbers representing degrees
output: a string 'right', 'acute', 'obtuse', or 'invalid'.


Rules:
  Right: One angle is a right angle (exactly 90 degrees).
  Acute: All three angles are less than 90 degrees.
  Obtuse: One angle is greater than 90 degrees.

  sum of the angles must be exactly 180 degrees and
    every angle must be greater than 0

Examples:


Algorithm:



*/
const VALID_TRIANGLE = 180;

function triangle(deg1, deg2, deg3) {
  let angles = [deg1, deg2, deg3];
  let triangleSum = deg1 + deg2 + deg3;
  let shortestAngle = Math.min(deg1, deg2, deg3);

  if (triangleSum !== VALID_TRIANGLE || shortestAngle === 0) return 'Invalid';

  for (let idx = 0; idx < angles.length; idx++) {
    if (angles[idx] === 90) return 'Right';
    if (angles[idx] > 90) return 'Obtuse';
  }

  return 'Acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"