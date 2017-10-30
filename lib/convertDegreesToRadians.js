/**
* Converts the degrees value into radians.
* Thows an error for invalid degrees paramter passed.
* @param {Number} degrees
* @returns {Number} radians
*/

function convertDegreesToRadians(degrees) {
  if (typeof degrees !== "number") {
    throw new Error("Invalid Type");
  }
  if (degrees < 0) {
    throw new Error("Invalid Value");
  }
  return Math.PI * degrees / 180.0;
}

module.exports = convertDegreesToRadians;
