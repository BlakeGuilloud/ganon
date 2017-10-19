/**
 * Returns true if value is -0, false otherwise 
 * @param {Number} value Value to be checked for -0. 
 */

function isNegativeZero(value) {
  return Object.is(-0, value);
}

module.exports = isNegativeZero;
