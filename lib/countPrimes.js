const isPrime = require("./isPrime");

// Function that returns the number of prime numbers up to and including `n` and not including 1
function countPrimes(n) {
  let numPrimes = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime(i))
      numPrimes++;
  }
  return numPrimes;
}

module.exports = countPrimes;