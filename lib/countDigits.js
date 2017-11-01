const DIGITS = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

/**
 * Counts the number of digits in a string
 * @param  {String} str
 * @return {Number}     Number of digits in `str`
 */
function countDigits(str) {
  return str.split("").filter(char => DIGITS.has(char)).length;
}

module.exports = countDigits;
