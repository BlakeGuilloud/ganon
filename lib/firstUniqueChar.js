/**
 * Write a function that accepts a string and returns the first character that is not repeated anywhere in the string
 * Note:  upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter
 * @param {String} s
 */
function firstUniqueChar(s) {
  var lower = s.toLowerCase();
  for (var i = 0; i < s.length; i++) {
    var c = lower.charAt(i);
    if (lower.indexOf(c) == i && lower.indexOf(c, i + 1) == -1) {
      return s[lower.indexOf(c)];
    }
  }
  return "";
}

module.exports = firstUniqueChar;
