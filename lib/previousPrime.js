/**
 * Write a function that accepts a number and returns the previous prime number
 * @param {Number} number
 * @return {Number}
 */

const isPrime = require("./isPrime");

function previousPrime(number) {
  if (typeof number !== "number" || number < 2) {
    throw new Error();
  }
  for (let i = (number - 1); i > 1; i--) {
    if( isPrime(i)) {
      return i;
    }
  }
  throw new Error();
}

module.exports = previousPrime;
