/**
 * Checks if inputted number is a leap year
 * @param {number} year
 * @return returned value in boolean
 */

function isLeapYear(year) {
  if(isNaN(year)) throw new TypeError("Invalid Type");

  if(year === 0) return false;
  else if (!year) throw new TypeError("Invalid Type");

  return (year % 4 === 0) ? true : false;
}
module.exports = isLeapYear;
