var gcd = require("./gcd");
/**
 * Write a function that takes 2 numbers as arguments
 * and returns the smallest positive number that is a multiple of two numbers.
*/

function lcm(a, b){
  if (!b) {
    if (typeof a == "number") {
      return a;
    } else {
      return 0;
    }
  }
  if (typeof a == "number" && typeof b == "number") {
    return a * b / gcd(a,b);
  } else {
    return 0;
  }
}

module.exports = lcm;
