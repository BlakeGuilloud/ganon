/**
 * Converts meters to feet
 *
 * @param {Number} meter
 * @returns {Number}
 */

function convertMetersToFeet(meter) {
  if (typeof meter != "number") {
    throw new Error("Paramter must be a number.");
  }
  return meter * 3.28084;
}

module.exports = convertMetersToFeet;
