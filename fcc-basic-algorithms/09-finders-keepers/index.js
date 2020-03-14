/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
Passed
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

*/
const findElement = (arr, func) => {
  for (const item of arr) {
    if (func(item)) {
      return item;
    }
  }
  return undefined;
};

// findElement([1, 2, 3, 4], num => num % 2 === 0);

// Alternate solution
function findElement(arr, func) {
  return arr.find(func);
}
