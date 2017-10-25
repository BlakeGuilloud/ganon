// Given an array of integers and a desired sum,
// return the first two occuring elements which could be added together to form the desired result.
// For example findPair(7, [1, 4, 5, 3, 6]) would return [4,3].
function findPair(sum, arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument at index 1 must be of type Array.");
  }

  let pair = [];
  let nextIndex = 0;
  for(let index = 0; index < arr.length; index++) {
    for (let indexToCheck = index + 1; indexToCheck < arr.length; indexToCheck++) {
      if ((arr[index] + arr[indexToCheck]) == sum) {
        pair = [arr[index], arr[indexToCheck]];
      }

      for (let betweenIndex = index + 1; betweenIndex <= indexToCheck; betweenIndex++) {
        if ((arr[betweenIndex] + arr[indexToCheck]) == sum) {
          pair = [arr[betweenIndex], arr[indexToCheck]];
        }
      }
      if (pair.length > 1) { break; }
    }
  }

  return pair;
}

module.exports = findPair;
