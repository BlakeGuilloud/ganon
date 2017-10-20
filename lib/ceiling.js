/**
 * Returns the next integer greater than the parameter passed in
 * @param {number} a the number to be rounded up
 * @returns number the input rounded up
 */
function ceiling(number) {
  if (typeof number !== "number") throw new Error("Input must be a number");
  return Math.ceil(number);
}

module.exports = ceiling;
