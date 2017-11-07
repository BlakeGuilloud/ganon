/**
 * Converts inches to meters
 *
 * @param {Number} inches
 * @returns {Number}
 */

function convertInchesToMeters(inches) {
  if (typeof(inches) !== "number") {
    throw new Error("Input must be a number");
  } else if (inches < 0) {
    throw new Error("Input must be a positive number");
  }

  return inches * 0.0254;
}

module.exports = convertInchesToMeters;