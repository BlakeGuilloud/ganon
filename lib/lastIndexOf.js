const isString = require("./isString");
const isArray = require("./isArray");

/**
 * Returns the index of the last occurrence of the element in an array
 *
 * @param {String|Number} key - Element to search for.
 * @param {Array|String} arr - List of things
 * @returns {Number} - Returns index of the last occurrence, or -1 if element does not exist.
 */
function lastIndexOf (key, arr) {
  if (!isArray(arr) && !isString(arr)) {
    throw new Error("Expected arr to be an array, but got: " + arr);
  }

  const typeOfKey = Object.prototype.toString.call(key);
  if (typeOfKey === "[object Function]") {
    throw new Error("Expected key to not be a function");
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const item = arr[i];
    if (item === key) {
      return i;
    }
  }
  return -1;
}

module.exports = lastIndexOf;
