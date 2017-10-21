// Function that returns the number of prime numbers up to and including `n` and not including 1
function countPrimes(n) {
  let numPrimes = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime(i))
      numPrimes++;
  }
  return numPrimes;
}

// Function to check a number is prime, based on Miller–Rabin formula
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
};

module.exports = countPrimes;