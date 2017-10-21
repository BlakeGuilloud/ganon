/**
 * Returns the Kelvin value of the given temperature in Celsius. The returned value must be equal to the expected value with a precision of 1 decimal digits.
 * @param {number} a the temperature in Kelvin, possible a floating point number
 * @returns the Kelvin value, possible a floating point number
 */

function convertCelsiusToKelvin(celsius) {
  return celsius + 273.15;
}

module.exports = convertCelsiusToKelvin;
