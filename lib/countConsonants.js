
/**
 * Gets a string as input and returns the number of consonants on it.
 * @param {String} str A string
 * @returns {Integer} Number of consonants in string
 */

function countConsonants(str) {
  if (typeof str !== "string") throw new TypeError("The value is not a string.");

  let consonantsCount = 0;
  var i = str.length;
  while (i--) {
    if(!(str[i].match(/[aeiou]/)))
      consonantsCount++;
  }

  return consonantsCount;
}

module.exports = countConsonants;