/**
 * Returns array sorted in ascending word length order.
 * Words of the same length stay in original order.
 * @param {array} inputArray
 *
 * @returns {array} sort array
 */

function sortByWordLength(inputArray) {
  if (!Array.isArray(inputArray)) {
    throw "Argument is not an array";
  }
  const sortedArray = inputArray.sort((a,b) => a.length - b.length);
  return sortedArray;
}

module.exports = sortByWordLength;
