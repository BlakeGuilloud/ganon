/**
 * TODO: Write a function that counts all digits in a string.
 * @param  {String} str
 * @return {Number}     Number of digits in `str`
 */
function countDigits(str) {
  return str.replace(/[^0-9]/g,"").length;
}

module.exports = countDigits;
