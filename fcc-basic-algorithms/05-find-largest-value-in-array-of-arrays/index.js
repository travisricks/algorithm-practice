/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

largestOfArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
Passed
largestOfArray([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
Passed
largestOfArray([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
Passed
largestOfArray([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].

*/
const largestOfArray = arr => {
  const result = [];
  for (const subArray of arr) {
    result.push(subArray[0]); // start by pushing the first element of the subArray to results
    // compare each other element against the first pushed element
    for (let i = 1; i < subArray.length; i++) {
      // if its larger than replace last element in result array (aka the first subArray element that was pushed)
      if (subArray[i] > result[result.length - 1]) {
        result.splice(-1, 1, subArray[i]);
      }
    }
  }

  console.log(result);
  return result;
};



module.exports = largestOfArray;
