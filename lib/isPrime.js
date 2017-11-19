// Write a function that determines if an integer is prime

function isPrime(num) {
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error();
  }
  if(num <= 1) {
    return false;
  }
  if(num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let numSqrt = Math.floor(Math.sqrt(num));
  for (let i = 5; i <= numSqrt; i += 6)
    if (num % i === 0 || num % (i + 2) === 0) return false;
  return true;
}

module.exports = isPrime;
