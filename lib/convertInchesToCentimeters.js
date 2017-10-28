/**
* Convert inches to centimeters where 1 inch equals 2.54 cm
* @param {number} inches
* @return returned value in centimeters
*/
function convertInchesToCentimeters(inches){
  if (typeof inches === "number" && inches === inches === isFinite(inches)) {
    return inches * 2.54;
  } else {
    throw("Invalid Type");
  }
}

module.exports = convertInchesToCentimeters;
