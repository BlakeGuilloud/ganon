/**
 * return the smallest integer in the given array
 *
 * @param {Array} arr the array as input.
 * @return {Number} the smallest integer in the given array.
 *
 */
function arrayMin (arr) {
  // your code goes here
  return Math.min(...arr);
}

module.exports = arrayMin;