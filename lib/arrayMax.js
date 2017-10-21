/**
 * return the largest integer in the given array
 *
 * @param {Array} arr the array as input.
 * @return {Number} the largest integer in the given array.
 *
 */
function arrayMax (arr) {
  let largestInt = arr[0];

  arr.forEach( (value) => {
    if(value > largestInt) {
      largestInt = value;
    }
  });

  return largestInt;
}
module.exports = arrayMax;