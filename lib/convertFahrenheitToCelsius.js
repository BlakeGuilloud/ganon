/**
 * lib/convertFahrenheitToCelsius.js
 *
 * returns the celsius temperature, if given a Fahrenheit temperature.
 * @param {number} farenheit temperature
 * @returns {number} celsius temperature
 */

function convertFahrenheitToCelsius(FarenheitTemp) {
   return ((FarenheitTemp - 32) * 0.5555 )
}

module.exports = convertFahrenheitToCelsius;
