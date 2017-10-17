// Write a function that returns the product of a number after it has been increased by X exponents.
// Parameter A can be the number, and parameter B can be the exponent.
function exponent(a, b = 2) {
  var result = 1;
  for (var i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

module.exports = exponent;
