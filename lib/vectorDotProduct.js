/**
 * Given 2 vectors of the same length, return their vector dot product.
 *
 * @param {Array<Number>} argument First vector
 * @param {Array<Number>} argument Second vector
 * @return Array<Number> array with the result
 *
 * @example
 * vectorDotProduct([1, 2, 3], [4, 5, 6])     // -> 32
 */

function vectorDotProduct(a, b) {
  if (!a || !b || a.length !== b.length || hasNaN(a) || hasNaN(b) || arguments.length !== 2) throw "Invalid arguments";
  return a.reduce((accumulator, ai, i) => accumulator += ai * b[i], 0);
}

function hasNaN(a) {
  return a.some(n => isNaN(n));
}

module.exports = vectorDotProduct;
