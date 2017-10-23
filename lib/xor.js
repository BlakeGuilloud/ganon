/**
 * A function that does a bitwise XOR of its parameters.
 * Given only booleans, the result is a logical XOR cast to a number.
 * Parameters can be as many as you wish.
 * Parameters can be simple numeric types, castable to numeric types or array
 * of such types. They can even be a mix of those.
 * NOTE: Nested arrays are not supported.
 */

function xor(...args) {
  return args.reduce((xorSum, val) => xorSum ^
    (Array.isArray(val) ? val.reduce((xorSum, val) => xorSum ^ val, 0) : val), 0);
}

module.exports = xor;
