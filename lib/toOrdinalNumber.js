/**
 * Returns the ordinal form of a number (e.g. 1 -> 1st)
 *
 * @param {(Number|String)} num
 * @returns {String}
 */

function toOrdinalNumber(num) {
  if (isNaN(num) || Array.isArray(num) || num <= 0) {
    throw "Provided value must be a positive integer.";
  }

  if (/^(1|2|3)$/.test(num) || num > 20) {
    if (/1$/.test(num)) {
      return num + "st";
    } else if (/2$/.test(num)) {
      return num + "nd";
    } else if (/3$/.test(num)) {
      return num + "rd";
    }
  }

  return num + "th";
}

module.exports = toOrdinalNumber;