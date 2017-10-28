/**
 * Converts meters to inches
 *
 * @param {Number} meter
 * @returns {Number}
 */

function convertMetersToInches(meter) {
  return parseFloat((meter / 0.0254).toFixed(2));
}

module.exports = convertMetersToInches;
