/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once
 * Return true if input string is a pangram, return false if not.
 *
 * Strings may contain characters of various case, your solution should account for this.
 *
 * @param {String} string
 * @returns {Boolean}
 */

function isPangram(string) {
  var lettersByFrequency = "zqxjkvbpygfwmucldrhsnioate";
  string = string.toLowerCase().replace(/[^a-z]/g,"");
  for (var i = 0; i < 26; i++) {
    if (string.indexOf(lettersByFrequency[i]) < 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPangram;
