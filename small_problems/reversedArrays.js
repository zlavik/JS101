function reverse(arr) {

  for (let leftidx = 0; leftidx < arr.length / 2; leftidx++) {
    for (let rightidx = arr.length - 1; leftidx < arr.length / 2; rightidx--) {
      [arr[leftidx], arr[rightidx]] = [arr[rightidx], arr[leftidx]];
      leftidx++;
    }
  }
  return arr;
}

// or

function reverse_(array) {
  let lastIndex = array.length - 1;
  for (let idx = lastIndex; idx >= 0; idx--) {
    array.unshift(array[lastIndex]);
    array.pop();
  }
  return array;
}


let arr = [1, 2, 3, 4];
let result = reverse(arr);
console.log(result); // logs [4,3,2,1]
console.log(arr === result); // logs true

let arr1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(arr1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(arr1 === result1); // logs true

let arr2 = ["abc"];
let result2 = reverse(arr2);
console.log(result2); // logs  ["abc"]
console.log(arr2 === result2); // logs true

let arr3 = [];
let result3 = reverse(arr3);
console.log(result3); // logs []
console.log(arr3 === result3); // logs true