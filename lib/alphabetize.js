/*
 * Takes a String and alphabetize the string's chars and returns the string.
 * @param {String} a
 * @return {String}
 */

function alphabetize(a) {
  return Array.from(a).sort().join("");
}

module.exports = alphabetize;
