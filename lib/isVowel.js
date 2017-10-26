/**
 * Write a function which receives a parameter and returns whether that parameter is a vowel or not
 * @param {string} char
 * @returns {boolean}
 */
function isVowel(char) {

  const regExp = /[aeiou]/i;
  return regExp.test(char);
}

module.exports = isVowel;