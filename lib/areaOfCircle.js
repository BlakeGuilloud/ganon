/**
 * Write a function that return a floating value representing the area of a circle with the given radius as input.
 * The returned value must be equal to the expected value with a precision of 4 decimal digits. Don't worry about the measuring unit.
 * @param {Number} radius
 * @return {Number} possibly a floating point value.
**/
function areaOfCircle (radius){
  return Math.PI * radius * radius;
}
module.exports = areaOfCircle;
