/**
 * Takes a function and an array, and sorts the array based on the given function.
 *
 * @param {Function, Array} A function for sorting, and the array you wish to be sorted.
 *
 * @return {Array} An array ordered based on the given sorting function.
 *
 */
function sortBy(func, arr) {
  if (typeof func !== "function" || !Array.isArray(arr) || arr.length < 1) {
    throw new Error();
  }

  return arr.sort(func);
}

module.exports = sortBy;
