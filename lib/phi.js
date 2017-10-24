/**
 *  Write a function that returns the Eulert Totient Function value of the input 'N'. Euler Totient Function (phi(N)) counts the positive integers up to a given integer N that are relatively prime to n.
 * For more details: https://en.wikipedia.org/wiki/Euler%27s_totient_function
 * @param {Number} N
 * @return {Number} positive integer representing phi(N)
 */
const gcd = require("./gcd");
function phi (N) {
  var result = 1;
  for (var i = 2; i < N; i++)
    if (gcd(i, N) == 1)
      result++;
  return result;
}
module.exports = phi;
