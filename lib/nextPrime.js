const isPrime = require("./isPrime");

/**
 * Print the out the next Prime number
 * 3 => 5
 */

function nextPrime(number) {
  if (typeof number !== "number" || Number.isNaN(number)) {
    throw new Error();
  }

  let next = number + 1;

  if (next < 2) {
    next = 2;
  }

  else if (next % 2 === 0) {
    next++;
  }

  while (!isPrime(next)) {
    next += 2;
  }

  return next;
}

module.exports = nextPrime;
