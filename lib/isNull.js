/**
 * Checks if a value is null.
 *
 * @param {*} n
 * @returns {Boolean}
 */

function isNull(n) {
  if (arguments.length != 1) {
    return false;
  }
  return n === null;
}

module.exports = isNull;
