const convertMileToKilometer = require("./convertMileToKilometer");
const convertGallonToLiter = require("./convertGallonToLiter");

/**
 * Converts fuel consumption measurements from MPG (Miles per US gallon) to liter per 100 kilometer
 * @param {number} milersPerGallon
 * @return returned value in liter per 100 kilometer
 */
function convertMilesPerGallonToLitersPer100Kilometer(milesPerGallon) {
  if (typeof milesPerGallon !== "number" || isNaN(milesPerGallon) || !isFinite(milesPerGallon)) {
    throw "argument to convertGallonToLiter must be a number";
  }

  // (1) Convert MPG in kilometer per liter
  //           1  Miles      1.609344 Kilometer                        Kilometer
  // 1 MPG =  ----------- = -------------------- = 0.4251439077933434 ------------
  //           1 Gallon         3.78541 Liter                            Liter

  // (2) Invert result to get liter per kilometer
  //                         Liter
  // ==> 2.352144724807126 -----------
  //                        Kilometer

  // (3) Times 100 gives us liter per 100 km
  //                            Liter
  // ==> 235.2144724807126  ---------------
  //                        100 * Kilometer


  const conversionFactor = convertMileToKilometer(1.0) / convertGallonToLiter(1.0);

  return 100.0 / (conversionFactor * milesPerGallon);
}

module.exports = convertMilesPerGallonToLitersPer100Kilometer;