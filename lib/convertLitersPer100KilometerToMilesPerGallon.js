const convertMileToKilometer = require("./convertMileToKilometer");
const convertGallonToLiter = require("./convertGallonToLiter");

/**
 * Converts fuel consumption measurements from liter per 100 kilometer to MPG (Miles per US gallon) 
 * @param {number} literPer100Kilometer
 * @return returned value in miles per gallon
 */
function convertLitersPer100KilometerToMilesPerGallon(literPer100Kilometer) {
  if (typeof literPer100Kilometer !== "number" || isNaN(literPer100Kilometer) || !isFinite(literPer100Kilometer)) {
    throw "argument to literPer100Kilometer must be a number";
  }

  return ((100 * convertGallonToLiter(1.0)) / (convertMileToKilometer(1.0) * literPer100Kilometer));
}

module.exports = convertLitersPer100KilometerToMilesPerGallon;