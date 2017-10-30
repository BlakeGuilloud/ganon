/**
 * Convert an input string to Pig Latin.  Pig Latin takes all leading consonants from beginning of a word,
 * moves them to the end of the word, then appends "ay" to the end of the word.
 * If a word begins with "qu", those 2 letters should be moved together.
 * @param {String} word Original word as a string
 * @returns {String} Translated word as a string
 */

function toPigLatin(word) {
  if (typeof word !== "string") {
    throw new TypeError("Invalid Type.");
  } else if (word.length == 0) {
    return word;
  }

  var consonants = [
    "b","c","d","f","g","h","j","k","l","m",
    "n","p","q","r","s","t","v","x","z","w","y"
  ];

  // word begins with "qu" ?
  var idx = word.indexOf("qu") == 0 ? 2 : 0;

  // find first non-consonant
  while (consonants.indexOf(word[idx]) >= 0) {
    idx++;
  }

  var str = word.substring(idx).concat(word.substring(0, idx)).concat("ay");

  return str;
}

module.exports = toPigLatin;