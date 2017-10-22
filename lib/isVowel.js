/**
 * Write a function which receives a parameter and returns whether that parameter is a vowel or not
 * @param {character}
 * @returns {boolean}
 */
function isVowel(character) {

  const regExp = /[aeiou]/i;
  return regExp.test(character);
}

module.exports = isVowel;