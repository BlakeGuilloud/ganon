/**
 * Returns true if number is a Harshad number, otherwise false.
 * A Harshad number is a number that is divisible by the sum of its own digits.
 *
 * @param {Number} N
 * @returns {boolean}
 */

function isHarshad(N) {
  if (typeof(N) != "number" || !N) {
    throw new Error("Input must be a number");
  }
  if (N < 0) {
    throw new Error("Input must be non-negative.");
  }
  let sum = N.toString().split("").map(Number).reduce((a, b) => a + b, 0);
  return N % sum == 0 ? true : false;
}

module.exports = isHarshad;
