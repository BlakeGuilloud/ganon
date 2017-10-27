/**
 * Get the circumference of a circle from a radius
 * @param {Number} radius
 * @return {Int or decimal} Return the circumference of the fircle.
 **/
function circumferenceOfACircle(radius) {
  var convertedRadius = parseFloat(radius);
  if(!isNaN(convertedRadius)){
    // toFixed() return string instead of number
    // so use unary operator + to convert it back to number
    return +(2 * Math.PI * radius).toFixed(2);
  }
  throw new Error("Invalid Argument");
}

module.exports = circumferenceOfACircle;
