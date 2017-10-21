/**
 * Convert liter to (US) gallon where 1 liter equals 0.264172 gallon
 * @param {number} liter
 * @return returned value in gallon
 */

function convertLiterToGallon(liter) {
  if (typeof liter != "number") {
    throw new Error("Paramter must not be a number.");
  }
  return liter * 0.264172052;
}

module.exports = convertLiterToGallon;
