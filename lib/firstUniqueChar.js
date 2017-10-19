/**
 * Write a function that accepts a string and returns the first character that is not repeated anywhere in the string
 * Note:  upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter
 * @param {String} s
 */
function firstUniqueChar(s) {
  var arr = s.toLowerCase().split("");

  var uniqueChar = arr.reduce((acc, next) => {
    if (arr.indexOf(next.toLowerCase()) === arr.lastIndexOf(next.toLowerCase())){
      acc.push(s.charAt(arr.indexOf(next)));
    }
    return acc;
  }, [])[0];

  // Return empty string if undefined
  return uniqueChar ? uniqueChar : "";
}

module.exports = firstUniqueChar;
