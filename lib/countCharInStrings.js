/**
 * If given a string, returns the character count.
 * If given an array, returns an array of the character count of the
 *   respective string items. If the array is nested, the return
 *   value is also nested.
 * If the given value is not a string or array, the value is returned.
 *
 * @param {String|Array} value A string or array of strings.
 * @returns {Number|Array} A single or array of character count(s).
 *
 * Example: value = 'hello~'
 *
 *          countCharInString(value) returns 6
 *
 * Example: value = [['Alice', 'Bob'], ['', 'Cathy'], 'Dendi']
 *
 *          countCharInStrings(value) returns [[5, 3], [0, 5], 5]
 */
function countCharInString(value) {
  const type = Object.prototype.toString.call(value);

  switch (type) {
  // Return the string length
  case "[object String]":
    return value.length;

  // Count the chars of array items.
  case "[object Array]":
    return countCharInStrings(value);

  // Ignore non-strings and non-arrays.
  default:
    return value;
  }
}

/**
 * Accepts a nested string array and return a nested character count array of given nested string array.
 *
 * @param {Array} strings A nested string array.
 * @returns {Array} A nested character count array.
 *
 * Example: strings = [['Alice', 'Bob'], ['', 'Cathy'], 'Dendi']
 *
 *          countCharInStrings(strings) returns [[5, 3], [0, 5], 5]
 */
function countCharInStrings(strings) {
  return strings.map(countCharInString);
}

module.exports = countCharInStrings;