/**
 * TODO: Write a function that counts all uppercase letters in a string.
 * @param str: string with uppercases
 */

function countUpperCase(str) {
  return str.replace(/[^A-Z]/g, "").length;
}

module.exports = countUpperCase;