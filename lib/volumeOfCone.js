/**
 * @param {Number} r is the radius of the base of  cone
 * @param {Number} h is the height of the cone
 * @return {Number} Volume of cone
 */

function volumeOfCone(r, h) {
  if (typeof r !== "number" || typeof h !== "number") {
    throw new Error("Invalid Type");
  }
  if (r < 0 || h < 0) {
    throw new Error("Invalid Value");
  }
  return Math.PI * Math.pow(r, 2) * h / 3.0;
}

module.exports = volumeOfCone;
