/**
 * This method should not modify the original array
 * It will take an array an return a new array with
 * the items in the reverse order:
 * [1, 2, 3, 4] => [4, 3, 2, 1]
 * ["pen", "pineapple", "apple", "pen"] => ["pen", "apple", "pineapple", "pen"]
 * @param {Array} the array to reverse
 * @returns {Array} the array reversed
 */

function reverseArray(arr) {
  if(Array.isArray(arr)) {
    let drr = arr.map(a => a);
    return drr.reverse();
  } else {
    throw new Error("Value is not an array!");
  }
}
module.exports = reverseArray;
