/**
 * TODO: Create a function that converts a given string to camelCase
 *
 * Assume input string uses spaces to seperate each word
 * Should return a string in the lowerCamelCase style
 *
 * For more info: https://en.wikipedia.org/wiki/Camel_case
 * @param {String} input
 * @returns {String}
 */

function camelCase (input) {
  if (typeof input != "string"){
    throw new Error("Type not allowed");
  }

  var inputSplit = input.toLowerCase().split(" ");
  var camelCaseArray = inputSplit.map(function(word, index) {
    if (index > 0) {
      return word[0].toUpperCase() + word.substring(1);
    }
    else {
      return word;
    }
  });
  return camelCaseArray.join("");
}

module.exports = camelCase;
