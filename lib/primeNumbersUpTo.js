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
    var primeNumbers = [...new Array(n + 1).keys()].slice(2);
    for (var i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
      primeNumbers = primeNumbers.filter(v => v % i !== 0 || v === i);
    }
    return primeNumbers;
  }
}

module.exports = primeNumbersUpTo;