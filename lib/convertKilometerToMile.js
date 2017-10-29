/**
 * Convert kilometers to mile where 1 kilometer equals 0.621371 mile
 * @param {number} kilometer
 * @return returned value in miles
 */

function convertKilometerToMile(kilometer) {
  if (typeof(kilometer) != "number" || !kilometer)
    throw new Error("Input must be a number");

  if (kilometer < 0)
    throw new Error("Input must be non-negative.");
  return kilometer * 0.621371;
}

module.exports = convertKilometerToMile;