/**
 * Write a function that accepts a string and returns the number of consonants in the string
 * @param {String} str
 * @return {Number}
 */

function consonantCount(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i).match(/[a-zA-Z]/) != null) {

    if (str.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)){
      count++;
    }
    }
  }
  return count.toString();
}

module.exports = consonantCount;
