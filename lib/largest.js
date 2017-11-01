/**
 * `largest` takes an Array and returns the largest element according to the
 * given ordering function.
 * @params {Array} Array of elements
 * @params {Function} test Test function that returns true when a is larger than b
 * @returns {any} The largest element in the input array
 */
function largest(arr, test) {
  if (!Array.isArray(arr) || typeof test !== "function") {
    throw new Error();
  }

  return arr.sort(test).pop();
}

module.exports = largest;
