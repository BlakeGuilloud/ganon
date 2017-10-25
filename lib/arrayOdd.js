/**
 * return odd numbers in the array
 *
 * @param {Array} arr the number array as input.
 * @return {Array} odd numbers array.
 *
 */
function arrayOdd(arr) {
  var odd = [];

  arr.forEach( (value) => {
    if((value % 2) != 0) {
      odd.push(value);
    }
  });

  return odd;
}

module.exports = arrayOdd;