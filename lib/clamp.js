/**
 * Write a function that returns
 * -  value, if min <= value <= max
 * -  min,   if value < min
 * -  max,   if value > max
 * @param {Number} value
 * @param {Number} value
 * @param {Number} value
 */
function clamp(value, min, max) {
  return value <= min ? min : value >= max ? max : value;
}

module.exports = clamp;