/**
 * Convert (US) gallon to liter where 1 gallon equals 3.78541 liter
 * @param {number} gallon
 * @return returned value in liter
 */

function convertGallonToLiter(gallon) {
  if (typeof gallon !== "number" || isNaN(gallon) || !isFinite(gallon)) {
    throw "argument to convertGallonToLiter must be a number";
  }

  return 3.78541 * gallon;
}

module.exports = convertGallonToLiter;
