/**
* @description Populates an array of all prime numbers <= n.
* @param {number} n
* @returns {array} primeNumbers <= n
**/

function primeNumbersUpTo(n) {
  if (!Number.isInteger(n)) {
    throw new Error("Invalid type");
  } else if (n < 2) {
    throw new Error("Invalid value");
  } else {
    var primes = [...new Array(n + 1).keys()].slice(2);
    for (var i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
      primes = primes.filter(v => v % i !== 0 || v === i)
    }
    return primes;
  }
}

module.exports = primeNumbersUpTo;