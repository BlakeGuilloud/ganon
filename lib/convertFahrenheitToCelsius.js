/**
 * Returns the celsius temperature, of a given Fahrenheit temperature.
 *
 * @param {Number} farenheit
 * @returns {Number}
 */

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

module.exports = convertFahrenheitToCelsius;
