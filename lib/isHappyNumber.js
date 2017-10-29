/**
 * @description Checks if a numbers is an Happy Number (more info in https://en.wikipedia.org/wiki/Happy_number)
 * @param {Number} n is the number to check
 * @return {Boolean}
 */

/*
  Starting with any positive integer,
    - replace the number by the sum of the squares of its digits in base-ten,
    - and repeat the process until the number either equals 1 (where it will stay),
        or it loops endlessly in a cycle that does not include 1.

    Those numbers for which this process ends in 1 are happy numbers,
    while those that do not end in 1 are unhappy numbers (or sad numbers).
*/

function isHappyNumber(n) {
  Number.isInteger = Number.isInteger ||
  function (param) {
    return typeof param === "number"
           && isFinite(param)
           && Math.floor(param) === param;
  };

  if (!Number.isInteger(n)) {
    throw new Error("Invalid Type");
  }
  if (n < 0) {
    throw new Error("Invalid Value");
  }

  return happyCheck(n);
}

function happyCheck(number, foundResults = {}) {
  if (number === 1) {
    return true;
  }

  let digits = number.toString().split("");
  let sum = 0;

  for(let i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], 2);
  }

  // if we've already found this result, we're starting to go infinite, we are unhappy.
  if (foundResults[sum]) {
    return false;
  }

  // track that we've already found this sum.
  foundResults[sum] = true;
  return happyCheck(sum, foundResults);
}

module.exports = isHappyNumber;
