/**
 * `filterArray` takes an Array of elements and applies a truth test function argument to each element,
 * removing any element from the array that fails the function argument. Returns the end result.
 *
 * @params {Array} arr Array of Objects
 * @params {Function} test The function to be used as a truth test
 * @returns {Array} The filtered array.
 */
function filterArray(arr, test) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument is not an array");
  }

  if (!test || typeof test !== "function") {
    throw new TypeError("Second argument is not a function");
  }

  return arr.filter(test);
}

module.exports = filterArray;
