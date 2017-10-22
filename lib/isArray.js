/**
 * Write a function isArray returns true if the value is an array and false if the value is not.
 * @param {array} obj
 * @returns {boolean}
 */

function isArray(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
}

module.exports = isArray;
