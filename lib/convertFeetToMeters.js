/**
 * Converts feet to meters
 *
 * @param {Number} feet
 * @returns {Number}
 */
const isNumber = require("./isNumber");

function convertFeetToMeters(feet) {
  if(!isNumber(feet)) {
    throw new Error("argument to convertFeetToMeters must be a number");
  }
  if(feet === 0)
    return 0;
  return feet * 0.3048;
}

module.exports = convertFeetToMeters;
