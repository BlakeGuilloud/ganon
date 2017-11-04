/**
 * Calculate and return the Hamming Distance between two strings of same length.
 *
 * @param {String} X
 * @param {String} Y
 * @return {Number} the Hamming Distance between X and Y.
 */

function hammingDistance(X, Y) {
  if ((typeof X !== "string") || (typeof Y !== "string")) {
    throw new Error("Invalid Type");
  }
  if(X.length !== Y.length) {
    throw new Error("String lengths don't match");
  }
  let count = 0;
  let len = X.length;
  for(var index = 0; index < len; index ++) {
    if(X[index] !== Y[index]) {
      count++;
    }
  }
  return count;
}

module.exports = hammingDistance;
