/**
 * Returns the first element of an Array.
 * Casts Strings into Arrays if passed.
 *
 * @param {Array|String} arr
 * @return {*}
 *
 */

function arrayHead(arr) {
  if ((Array.isArray(arr) || typeof arr === "string") && arr.length) {
    return arr[0];
  }

  return undefined;
}

module.exports = arrayHead;
