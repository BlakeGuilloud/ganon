/**
 * Converts feet to meters
 *
 * @param {Number} feet
 * @returns {Number}
 */

function convertFeetToMeters(feet) {
  if (typeof feet !== "number" || isNaN(feet) || !isFinite(feet))
  {
    throw "argument to convertFeetToMeters must be a number";
  }

  return feet * 0.3048;
}

module.exports = convertFeetToMeters;
