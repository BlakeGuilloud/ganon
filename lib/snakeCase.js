/**
 * Assume input string uses spaces to seperate each word
 * Should return a string in the lowerSnakeCase style
 *
 * For more info: https://en.wikipedia.org/wiki/Snake_case
 * @param {String} input
 * @returns {String}
 */

function snakeCase (input) {
  return input.toLowerCase().replace(/\s/g, "_");
}

module.exports = snakeCase;
