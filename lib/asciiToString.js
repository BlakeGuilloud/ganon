/**
 * return a String to given ASCII
 *
 * @param {Array} arr the array as input.
 * @return {String} the converted String
 *
 */
function asciiToString(arr) {
  return arr.map(c => String.fromCharCode((c))).join("");
}

module.exports = asciiToString;