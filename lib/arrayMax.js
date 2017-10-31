/**
 * return the largest integer in the given array
 *
 * @param {Array} arr the array as input.
 * @return {Number} the largest integer in the given array.
 *
 */
function arrayMax (arr) {
  if (!Array.isArray(arr)) return;
  let firstVal = arr[0] ? arr[0] : 0;
  return arr.reduce((accum, val) => {
    return val > accum ? val : accum;
  }, firstVal);
}
module.exports = arrayMax;
