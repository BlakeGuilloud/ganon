/**
 * Determines if a number falls between a range of numbers.
 *
 * @param {Number} candidate
 * @param {Number[]} range
 * @param {Boolean} inclusive
 * @return {Boolean}
 *
 */

const isNumber = require("./isNumber");

function isBetween(candidate, range, isInclusive = true) {
  if (!isNumber(candidate)) throw "candidate must be type Number";
  if (!Array.isArray(range)) throw "range must be type Array";

  let min = range[0], max = range[1];

  if (!isNumber(min) || !isNumber(max)) throw "range items must be Numbers";
  if (min > max) throw "range[0] must be less than or equal to range[1]";
  if (isInclusive) return min <= candidate && candidate <= max;

  return min < candidate && candidate < max;
}

module.exports = isBetween;
