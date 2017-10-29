/**
 * Count the number of times a char is in a string.
 *
 * @param {string} inputStr
 * @param {string} value
 * @return {number} Number of times value is in inputStr
 */

function countCharOccurrenceInString(inputStr, value) {
  if (typeof inputStr !== "string") {
    throw new TypeError("First argument to CountCharOccurrenceInString must be a string");
  }
  if (typeof value !== "string" || value.length !== 1) {
    throw new TypeError("Second argument to CountCharOccurrenceInString must be a one-character string");
  }
  return inputStr.toLowerCase().split("").filter((n) => n === value).length;
}

module.exports = countCharOccurrenceInString;