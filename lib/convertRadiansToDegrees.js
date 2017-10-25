/**
 * Converts radians to degreees
 * @param {Number} the number in radians
 * @return {Number} the number in degrees
 */
function convertRadiansToDegrees(x) {
  if (typeof x !== "number") {
    throw new Error("x should be a number");
  }
  return x / Math.PI * 180;
}

module.exports = convertRadiansToDegrees;
