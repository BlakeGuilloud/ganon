/**
 * Returns the Kelvin value of the given temperature in Celsius.
 * The returned value must be equal to the expected value with
 * a precision of 1 decimal digits.
 *
 * @param {Number} celsius
 * @returns {Number}
 */

function convertCelsiusToKelvin(celsius) {
  return celsius + 273.15;
}

module.exports = convertCelsiusToKelvin;
