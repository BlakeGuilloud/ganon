/*
 * Write a function that determines if the passed value is a perfect number
 *
 * Perfect number equals to the sum of its all divisors (except itself)
 * e.g. 6 == 1 + 2 + 3
 * For more info:
 * https://en.wikipedia.org/wiki/Perfect_number
 *
 * @param {number} num
 * @returns {boolean}
 */
function perfectNumber(num) {
  var sum = 0;
  var upperLimit = Math.floor(num / 2);

  // There are no odd perfect numbers.
  if (num % 2 != 0) {
    return false;
  }

  for (var i = 1; i <= upperLimit; i++) {
    if ( (num % i) == 0 ) {
      sum += i;
    }
  }
  return num == sum;
}

module.exports = perfectNumber;