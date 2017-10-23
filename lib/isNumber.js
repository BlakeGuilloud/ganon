/**
 * Checks if a value is a number.
 *
 * @param {*} n
 * @returns {Boolean}
 */

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = isNumber;
