/**
 * Checks if a number is divisible by a set of divisors
 * @param {number} num
 * @param {Array<number>} divisors
 * @return returned value in boolean
 */

function isDivisibleBy(num, divisors) {
  if (typeof num !== "number" || !Array.isArray(divisors) || divisors.some(isNaN)) {
    throw new TypeError("Invalid Type");
  }

  let result = true;

  divisors.map((number, i) =>
    result = result && Number.isInteger(num / number)
  );
  return result;
}

module.exports = isDivisibleBy;
