/**
 * Takes a function and an array, and sorts the array based on the given function.
 *
 * @param {number} r1 smaller radius
 * @param {number} r2 bigger radius
 * @param {number} h height of frustum
 *
 * @return {number} volume of frustum
 *
 */
function volumeOfFrustum(r1, r2, h) {

  if (isNaN(r1) || isNaN(r2) || isNaN(h)) {
    throw new Error("Invalid Value");
  }
  if (r1 < 0 || r2 < 0 || h < 0) {
    throw new Error("Invalid Value");
  }
  if (r1 === null || r2 === null || h === null) {
    throw new Error("Invalid Value");
  }

  var volume = 1 / 3 * Math.PI * h * (Math.pow(r2, 2) + r2 * r1 + Math.pow(r1, 2));
  return volume;
}

module.exports = volumeOfFrustum;
