/**
 * Returns true if value is +0, false otherwise 
 * @param {Number} value Value to be checked for +0. 
 */

function isPositiveZero(value) {
  return 1/value === Infinity;
}

module.exports = isPositiveZero;
