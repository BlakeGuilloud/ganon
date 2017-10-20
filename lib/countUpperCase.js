/**
 * A function that counts all uppercase letters in a string.
 * @param str: string with uppercases
 */

function countUpperCase(str) {
  return str.length - str.replace(/[A-Z]/g, "").length;
}

module.exports = countUpperCase;