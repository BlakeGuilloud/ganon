/**
 * Convert miles to kilometers where 1 mile equals 1.609344 kilometers
 * @param {number} mile 
 * @return returned value in kilometers  
 */

function convertMileToKilometer(mile) {
  if (typeof(mile) != "number")
    throw new Error("Input must be a number");
  return mile * 1.609344;
}

module.exports = convertMileToKilometer;