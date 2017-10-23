/**
 * Concatenates all arrays into one array.
 *
 * @param {Array} arr
 * @param {...Array} rest
 * @returns {Array}
 */

function concatenateArray(arr, ...rest) {
  rest.forEach(r => {
    arr.push(...r);
  });
  return arr;
}

module.exports = concatenateArray;
