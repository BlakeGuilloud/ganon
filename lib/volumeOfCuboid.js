/**
 * Checks if a number is divisible by a set of divisors
 * @param {Number} l is the length of the cuboid
 * @param {Number} w is the width of the cuboid
 * @param {Number} h is the height of the cuboid
 * @return {Number} Volume of cuboid
 */

function volumeOfCuboid(l, w, h) {
  if (typeof l == "number" && typeof w == "number" && typeof h == "number") {
    return l * w * h;
  } else {
    throw new Error("Invalid Type");
  }
}

module.exports = volumeOfCuboid;