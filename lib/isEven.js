/**
 * Write a function that returns true if the value entered is even and false if the value is odd
 * @param {number} n
 * @returns {boolean}
 */
function isEven(n) {
  if (Number(n)) {
    return n % 2 === 0;
  }
  throw new Error("Provided value must be a number");
}

module.exports = isEven;
