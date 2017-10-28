/**
 * Converts meters to inches
 *
 * @param {Number} meters
 * @returns {Number}
 */

function convertMetersToInches(meters) {
  if (typeof meters !== "number") {
    throw new Error("Invalid Type");
  }
  if (meters < 0) {
    throw new Error("Invalid Value");
  }
  return meters * 39.3701;
}

module.exports = convertMetersToInches;