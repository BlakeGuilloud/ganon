/**
 * Returns true if a word is inside an array, otherwise false.
 *
 * @param {Array} arr
 * @param {string} word
 * @returns {boolean}
 */

function contain(arr, word) {
  return arr.indexOf(word) > -1;
}

module.exports = contain;