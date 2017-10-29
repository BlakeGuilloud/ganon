/**
 * Convert miles to kilometers where 1 mile equals 1.609344 kilometers
 * @param {number} mile
 * @return returned value in kilometers
 */

function convertMileToKilometer(mile) {
  if (typeof(mile) != "number" || !mile)
    throw new Error("Input must be a number");

  if (mile <= 0)
    throw new Error("Input must be a more than 0. Anything times zero is... 0");
  return mile * 1.609344;
}

module.exports = convertMileToKilometer;