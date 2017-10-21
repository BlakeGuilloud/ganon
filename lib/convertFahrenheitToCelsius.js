/**
 * lib/convertFahrenheitToCelsius.js
 *
 * returns the celsius temperature, if given a Fahrenheit temperature.
 * @param {number} farenheit temperature
 * @returns {number} celsius temperature
 */

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

module.exports = convertFahrenheitToCelsius;
