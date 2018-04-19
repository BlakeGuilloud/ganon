/**
 * Returns a new, reflected Array from a given Array.
 *
 * [1, 2, "bar"]
 * >> [1, 2, "bar", "bar", 2, 1]
 *
 * @param {Array} arr
 * @returns {Array}
 */

function arrayReflect(arr) {
  if (Array.isArray(arr)) return [...arr, ...arr.reverse()];

  throw "Parameter must be of type Array";
}

module.exports = arrayReflect;
