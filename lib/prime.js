// Write a function that determines if an integer is prime

function prime(num) {
  let num_sqrt = Math.floor(Math.sqrt(num));
  for(let i = 2; i <= num_sqrt; i++)
    if(num % i === 0) return false;
  return num > 1;
}

module.exports = prime;
