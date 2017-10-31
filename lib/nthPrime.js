const isPrime = require("./isPrime");

/**
Returns the nth prime number, or -1 if n < 1.
@param {int} n
@returns {int} nth prime number
*/

const MAX = 10000;

function nthPrime(n) {

  if(n < 1)
    return -1;

  let counter = 0;
  for (let i = 2; i < MAX; i++) {
    if (isPrime(i))
      counter++;

    if (counter === n)
      return i;
  }
}

module.exports = nthPrime;
