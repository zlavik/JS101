// function swapName(fullname) {
//   return fullname.split(' ').reverse().join(', ');
// }

function swapName(str) {
  let arr = str.split(" ");
  let surname = arr.pop();
  let remainder = arr.join(' ');

  return `${surname}, ${remainder}`;
}
swapName('Karl Oskar Henriksson Ragvals');
swapName('Joe Roberts');    // "Roberts, Joe"