// Given an array of integers and a desired sum,
// return the first two occuring elements which could be added together to form the desired result.
// For example findPair(7, [1, 4, 5, 3, 6]) would return [4,3].
function findPair(sum, arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument at index 1 must be of type Array.");
  }

  for (const num of arr) {
    const targetNum = sum - num;
    if (arr.includes(targetNum)) {
      return [num, targetNum];
    }
  }
  return [];
}
module.exports = findPair;