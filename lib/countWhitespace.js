/**
 * Count the number of whitespace characters in a string.
 *
 * @param {string} inputStr
 * @return {number} Number of whitespace characters in inputStr
 */

function countWhitespace(inputStr) {
  let spaces = 0;

  inputStr.split("").map((ch) => { spaces += [" ", "\n", "\t"].includes(ch) ? 1 : 0; });

  return spaces;
}

module.exports = countWhitespace;
