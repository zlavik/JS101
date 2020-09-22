/*
https://www.codewars.com/kata/52597aa56021e91c93000cb0
*/

// function moveZeros(array) {
//   let nonZeroArray = array.reduce((acc, cur) => {
//     if (cur !== 0) acc.push(cur);
//     return acc;
//   }, []);

//   let zeros = '0'.repeat(array.length - nonZeroArray.length);
//   zeros.split('').forEach(ele => nonZeroArray.push(Number(ele)));

//   return nonZeroArray;
// }

function moveZeros(array) {
  return array.filter(num => num !== 0).concat(array.filter(num => num === 0));
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));