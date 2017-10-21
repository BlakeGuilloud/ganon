/**
 * Returns true for values [0, Inifinity]
 *
 * @param {Number} n
 * @returns {Boolean}
 */

const isNumber = require("./isNumber");

function isNotNegative(n) {
  if (isNumber(n)) return n >= 0;

  throw "n is not type Number";
}

module.exports = isNotNegative;
