/**
 * @param {string} char
 */
function isConsonant(char) {
  return !/^[aeiou ]|\d$/i.test(char);
}

module.exports = isConsonant;
