/**
 * Returns true if a, b, c is pythagorean triple
 * @param {Number} a First value of pythagorean.
 * @param {Number} b Second value of pythagorean.
 * @param {Number} c Third value of pythagorean.
 */

function isPythagoreanTriple(a, b, c) {
  return c > a && c > b && a * a + b * b === c * c;
}

module.exports = isPythagoreanTriple;
