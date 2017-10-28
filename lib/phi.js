/**
 *  Write a function that returns the Eulert Totient Function value of the input 'N'. Euler Totient Function (phi(N)) counts the positive integers up to a given integer N that are relatively prime to n.
 * For more details: https://en.wikipedia.org/wiki/Euler%27s_totient_function
 * @param {Number} N
 * @return {Number} positive integer representing phi(N)
 */
function phi (N) {
  // Initialize result as N
  var result = N;
  // Consider all prime factors of N and for every prime
  // factor p, multiply result with (1 - 1/p)
  for (var p = 2; p * p <= N; ++p){
    // Check if p is a prime factor.
    if (N % p == 0){
      // If yes, then update N and result
      while (N % p == 0)
        N /= p;
      result *= (1.0 - (1.0 / p.toFixed(2)));
    }
  }
  // If n has a prime factor greater than sqrt(N)
  // (There can be at-most one such prime factor)
  if (N > 1)
    result *= (1.0 - (1.0 / N.toFixed(2)));
  return Math.round(result);
}

module.exports = phi;
