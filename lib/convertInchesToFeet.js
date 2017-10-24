/**
 * Convert inches to feet where 12 inches equals 1 foot
 * @param {number} inches
 * @return returned value in feet
 */

function convertInchesToFeet(inches) {
  if (typeof inches === "number" && inches === inches && isFinite(inches)) {
    return Math.round((inches / 12) * 10000) / 10000;
  } else {
    throw("Invalid Type");
  }
}

module.exports = convertInchesToFeet;
