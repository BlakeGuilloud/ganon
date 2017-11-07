"use strict";

/**
 * TODO: Write a function that counts all alphanumeric characters in a string.
 * Alphanumeric characters are A-Z, a-z and 0-9
 * @param str: string
 */

function countAlphaNumeric(str) {
  if (typeof str !== "string") {
    throw new TypeError("Invalid Type");
  }

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    (str[i].match(/[a-zA-Z0-9]/)) ? result += 1 : null;
  }
  return result;
}

module.exports = countAlphaNumeric;