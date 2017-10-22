/**
 * TODO: Write a function that counts all uppercase letters in a string.
 * @param str: string with uppercases
 */

function countUpperCase(str) {
  let count = 0;

  str.split("").map((ch) => { count += ch.toUpperCase() === ch ? 1 : 0; });
  return count;
}

module.exports = countUpperCase;