/**
 * Returns the number of unique elements in an array
 *
 * @param {Array} arr
 * @returns {Number}
 */

function uniqueCount(arr) {
  if (Array.isArray(arr)) {
    return [...new Set(arr)].length;
  }

  throw "arr is not an Array";
}

module.exports = uniqueCount;
