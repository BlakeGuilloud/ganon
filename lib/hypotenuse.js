/**
 * Calculate the length of the hypotenuse of a triangle given the other two sides.
 *
 * @param {Number} a length of the first side
 * @param {Number} b length of the second side
 * @return {Number} length of hypotenuse
 */
function hypotenuse(a, b) {
  return Math.hypot(a, b);
}

module.exports = hypotenuse;
