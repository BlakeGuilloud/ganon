
/**
 * Gets a string as input and returns the number of vowels on it.
 * @param {String} str A string
 * @returns {Integer} Number of vowels in string
 */

function countVowels(str) {
  var vowels = [/a/g, /e/g, /i/g, /o/g, /u/g];
  var count = 0;
  for (var i = 0; i < vowels.length; i++) {
    var found = str.match(vowels[i]);
    if (found == null)
      continue;

    count += found.length;
  }
  return count;
}

module.exports = countVowels;
