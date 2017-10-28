/**
 * Convert centimeters to inches where 1 cm equals 0.393701 inches
 * @param {number} cm
 * @return returned value in inches
 * Sample test code and output below 
 * convertCentimetersToInches(87) = 34.252
 * convertCentimetersToInches(67) = 26.378
 
 */
function convertCentimetersToInches(cm) {
    if (!isNaN(cm)) {
        var valueInInches = cm * 0.393701;
        return Number(valueInInches.toFixed(3));
    } else {
        return 0;
    }
}

module.exports = convertCentimetersToInches;
