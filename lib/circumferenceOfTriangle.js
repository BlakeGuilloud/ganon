/**
 *  Write a function that returns the circumference of a triangle with three sides (a, b, c) as input.
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @return {Number} possibly a floating point value.
 */
function circumference (a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0 || !Number.isNaN(a) || !Number.isNaN(b) || !Number.isNaN(c)) {
    throw new Error("Triangle doesn't exist");
  }
  return a + b + c;
}

module.exports = circumference;
