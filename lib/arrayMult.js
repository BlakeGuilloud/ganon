/**
 * This method should not modify the original array.
 * It will ignore anything that is not a number
 * It will take an array of numbers an return the result of all
 * the items multiplied
 * [1, 2, 3, 4] => 24
 * ["pen", "pineapple", "apple", "pen"] => 0
 * @param {Array} the array to multiply
 * @returns {Number} the result of the multiplication
 */

function arrayMult(arr) {
    var s, total = 1, arrayWithOne = false, arrayLength = arr.length;
    for (var i = 0; i < arrayLength; i++) {
  if (!isNaN(arr[i])) {
      if (arr[i] == 1 && !arrayWithOne) {
        arrayWithOne = true;
      }
      total = total * arr[i];
    }
  }
  if (arrayWithOne) {
    return total;
  } else if (total == 1) {
    return 0;
  } else {
    return total;
  }
}

module.exports = arrayMult;
