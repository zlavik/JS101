// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

/*
The fill() method changes all elements in an array to a static value,
 from a start index (default 0) to an end index (default array.length).
  It returns the modified array.
*/

// we can find out but runing console.log(arr); => [1, 1, 1, 1, 1]
// which means its destructive.