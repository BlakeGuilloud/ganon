/**
 * Pack the given value into an array if it is not already one.
 *
 * @param {*} value The value to be packed into an array.
 * @returns An array containing only the given value, or the original value if it already is an array.
 *
 * @example
 * castArray("test")    // -> ["test"]
 * castArray(["test"])  // -> ["test"] (same array instance!)
 * castArray(null)      // -> [null]
 * castArray(undefined) // -> [undefined]
 */
function castArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}

module.exports = castArray;
