/**
 * Round a number to a certain number of decimal places
 * @param {Number} the number to round
 * @param {Number} the number of decimal places
 * @return {Number} the rounded number
 */

function roundTo(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x and y should be numbers");
  }
  return Number(x.toFixed(y));
}

module.exports = roundTo;
