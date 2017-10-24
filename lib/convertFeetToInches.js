const isNumber = require("./isNumber");

/**
 * Converts feet to inches
 *
 * @param {Number} feet
 * @returns {Number}
 */

function convertFeetToInches(feet) {
  if(!isNumber(feet)) {
    throw "argument to convertFeetToInches must be a number";
  }

  return 12 * feet;
}

module.exports = convertFeetToInches;
