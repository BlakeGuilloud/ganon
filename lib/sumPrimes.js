const isPrime = require("./isPrime");
/**
* Return the sum of all the prime numbers up to and including the provided number.
* A prime number is defined as a number greater than one and having only two divisors,
* one and itself.
* @param {Number} num
* @return {Number} the sum of the primes
*/

function sumPrimes(num) {
  num = parseInt(num, 10);
  if (isNaN(num)) {
    throw new Error("Argument num cannot be evaluated as a number");
  }
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

module.exports = sumPrimes;
