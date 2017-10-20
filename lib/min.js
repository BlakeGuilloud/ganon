/**
 * write a function that finds the min between two numbers
 * @param {Number} a
 * @param {Number} b
 */
function min(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else {
    return a;
  }
}

module.exports = min;
