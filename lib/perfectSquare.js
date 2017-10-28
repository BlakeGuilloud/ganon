/**
 * Write a function that determines if the passed value is a perfect square.
 *
 * A perfect square is a number that can be expressed as the square of a whole number.
 * e.g. 9 = 3^2
 * For more info:
 * http://www.mathwarehouse.com/arithmetic/numbers/what-is-a-perfect-square.php
 *
 *
 * @param {number} num
 * @returns {Boolean}
 */
function perfectSquare(num) {
  if (typeof num === "number" && isFinite(num)) {
    const sqrt = Math.sqrt(num);

    return sqrt === Math.ceil(sqrt);
  }

  return false;
}

module.exports = perfectSquare;
