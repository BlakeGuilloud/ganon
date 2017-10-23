/**
 * Returns the geometric mean of an Array of Numbers
 * https://www.mathsisfun.com/numbers/geometric-mean.html
 *
 * @param {Number[]} numArr
 * @returns {Number}
 */

const isNotNegative = require("./isNotNegative");

function geometricMean(numArr) {
  if (Array.isArray(numArr)) {
    if (numArr.every(isNotNegative)) {
      let numArrLen = numArr.length;
      let total = 1;

      numArr.forEach((num) => {
        total *= num;
      });

      return Math.pow(total, 1 / numArrLen);
    }

    throw "numArr must be comprised of non-negative Numbers";
  }

  throw "numArr must be of type Array";
}

module.exports = geometricMean;
