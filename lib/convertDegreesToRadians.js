/**
* Converts the degrees value into radians.
* Thows an error for invalid degrees paramter passed.
* @param {Number} degrees
* @returns {Number} radians
*/

function convertDegreesToRadians(degrees) {
  if (typeof degrees !== "number") {
    throw new Error("Provided value must be a number");
  }
  return (Math.PI * degrees) / 180;
}

module.exports = convertDegreesToRadians;
