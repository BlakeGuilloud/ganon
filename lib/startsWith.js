/**
 * Returns true if targetString starts with substring.
 * Otherwise, returns false.
 *
 * @param {string} targetString
 * @param {string} substring
 * @returns {boolean}
 */

function startsWith(targetString, substring) {
  return targetString.indexOf(substring) === 0;
}

module.exports = startsWith;
