/**
 * A function that returns the sum of its parameters
 * Parameters can be as many as you wish.
 * Parameters can be simple numeric types, castable to numeric types or array
 * of such types. They can even be a mix of those.
 * NOTE: Nested arrays are not supported.
 */

function sum(...args) {
  return args.reduce((sum, val) => sum +
    (Array.isArray(val) ? val.reduce((sum, val) => sum + val, 0) : val), 0);
}

module.exports = sum;
