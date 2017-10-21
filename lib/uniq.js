/**
 * Creates a duplicate-free version of an array using a shallow comparison
 * @param array: Contains the items that will be checked for uniqueness
 * @return: An array containing unique elements
 */
function uniq(array) {
  if (Array.isArray(array)) {
    return [...new Set(array)];
  }

  throw "array is now an Array";
}

module.exports = uniq;
