// Write a function that determines if an integer is prime

function isPrime(num) {
  let numSqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= numSqrt; i++)
    if (num % i === 0) return false;
  return num > 1;
}

module.exports = isPrime;
