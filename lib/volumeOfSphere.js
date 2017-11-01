/**
 * @param {Number} r is the radius of the sphere
 * @return {Number} Volume of sphere
 *
 * @throws "Invalid Type" if {@param r} is not a number
 * @throws "Invalid Value" if {@param r} is negative
 */

function volumeOfSphere(r) {
  if (typeof r !== "number") {
    throw new Error("Invalid Type");
  }
  if (r < 0) {
    throw new Error("Invalid Value");
  }
  return Math.PI * 4 / 3 * Math.pow(r, 3);
}

module.exports = volumeOfSphere;
