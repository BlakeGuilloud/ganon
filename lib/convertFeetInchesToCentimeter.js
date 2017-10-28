/**
 * Converts a height represented in feet and inches to centimeters
 *
 * @param {Number} feet
 * @param {Number} inches
 * @returns {Number}
 */
function convertFeetInchesToCentimeter(feet, inches) {
  if (/^[0-9]+$/.test(feet) && /^[0-9]+$/.test(inches)){

    var parsedFeet = parseInt(feet);
    var parsedInches = parseFloat(inches);

    var feetInches = (parsedFeet * 12) + parsedInches;
    return +(feetInches * 2.54).toFixed(2);
  }
  throw new Error("Invalid Argument");
}

module.exports = convertFeetInchesToCentimeter;
