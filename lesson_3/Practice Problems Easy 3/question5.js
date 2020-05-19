// The following function unnecessarily uses two return statements to
// return boolean values. How can you eliminate the unnecessary duplication?


/*
function isColorValid(color) {
  return (color === "blue" || color === "green") 
}
*/
const isColorValid = color => ["blue", "green"].includes(color);
console.log(isColorValid('blue'));