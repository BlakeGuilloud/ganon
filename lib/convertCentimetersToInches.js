/**
 * Convert centimeters to inches where 1 cm equals 0.393701 inches
 * @param {number} cm
 * @return returned value in inches
 */
function convertCentimetersToInches(cm){
  if(!isNaN(cm)){
    var valueInInches = cm * 0.393701;
    return Number(valueInInches.toFixed(3));
  } else{
    return 0;
  }
}

module.exports = convertCentimetersToInches;
