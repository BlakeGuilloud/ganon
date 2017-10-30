/**
 *  Write a function that returns the Eulert Totient Function value of the input 'N'. Euler Totient Function (phi(N)) counts the positive integers up to a given integer N that are relatively prime to n.
 * For more details: https://en.wikipedia.org/wiki/Euler%27s_totient_function
 * @param {Number} N
 * @return {Number} positive integer representing phi(N)
 */
function phi (N) {
  let result = N;
  for (let p = 2; p * p <= N; p++) {
    if (N % p == 0) {
      while (N % p == 0) {
        N /= p;
      }
      result -= result / p;
    }
  }
  if (N > 1) {
    result -= result / N;
  }
  return result;
}

module.exports = phi;
