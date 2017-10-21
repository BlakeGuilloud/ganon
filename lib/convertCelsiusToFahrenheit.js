/**
 * Returns the Fahrenheit value of the given temperature in Celsius.
 * The returned value must be equal to the expected value with
 * a precision of 1 decimal digits.
 *
 * @param {Number} celsius
 * @returns {Number}
 */
function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

module.exports = convertCelsiusToFahrenheit;

