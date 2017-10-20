/**
 * Returns a floating value representing the area of a circle with the given radius as input. The returned value must be equal to the expected value with a precision of 4 decimal digits. Don't worry about the measuring unit.
 * @param {Number} radius
 * @return {Number} possibly a floating point value.
 */
function areaOfCircle (radius) {
  var result = Math.PI * Math.pow(radius, 2);
  return Number(result.toFixed(4));
}

module.exports = areaOfCircle;
