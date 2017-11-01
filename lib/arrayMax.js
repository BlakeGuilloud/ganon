/**
 * return the largest integer in the given array
 *
 * @param {Array} arr the array as input.
 * @return {Number} the largest integer in the given array.
 *
 */
function arrayMax (arr) {
  if (!Array.isArray(arr)) throw "Invalid Array";
  return Math.max(...arr);
}
module.exports = arrayMax;
