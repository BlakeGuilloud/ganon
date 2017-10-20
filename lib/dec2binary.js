/**
 * Write a function that returns the binary represenetation of a non-negative integer (first parameter) (without leading zeroes), as a string
 * @param {Number} n
 */

function isNonNegativeInteger(n) {
  return Number.isInteger(n) && n >= 0;
}

function dec2binary(n) {
  if (!isNonNegativeInteger(n)) {
    throw "Argument is not a non-negative integer";
  }
  return n.toString(2);
}

module.exports = dec2binary;