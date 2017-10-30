/**
 * Convert watts to BTU/hr
 * @param {number} watts
 * @return returned value in BTU/hr
 */

function convertWattsToBTUPerHour(watts) {
  if(Math.sign(watts) == -1 || typeof watts !== "number")
    throw new Error("Invalid input");

  return parseFloat((watts * 3.41).toFixed(2));
}

module.exports = convertWattsToBTUPerHour;
