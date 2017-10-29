/*
  * Calculate the sum of the divisors of the passed number.
  * Also known as the aliquot sum.
  * For more info:
  * https://en.wikipedia.org/wiki/Aliquot_sum
  *
  * Written by Grant Hill (kansattica)
  *
  * @param {number} num
  * @returns {number}
  */
function divisorSum(num) {
  var divsum = 0;
  for (var i = 0; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      divsum += i;
      divsum += num / i;
    }
  }
  return divsum - num; //Don't count the number itself in the sum of divisors.
}

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
function perfectNumber(num) { return num == divisorSum(num); }

module.exports = perfectNumber;
