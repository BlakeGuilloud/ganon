/**
 * Write a function that returns a decimal input into a binary representation
 * Supports
 * https://en.wikipedia.org/wiki/Double-precision_floating-point_format
 *
 *
 * @param {Number} dec - A non-negative integer
 * @returns (String) A string of the converted decimal without leading zeroes
 * @see https://en.wikipedia.org/wiki/Double-precision_floating-point_format
 */
function dec2binary(dec) {
  if(!Number.isSafeInteger(dec)) {
    throw new RangeError("Decimal to Binary conversion restricted to safe integers.");
  }
  return (dec >>> 0).toString(2);
}

module.exports = dec2binary;