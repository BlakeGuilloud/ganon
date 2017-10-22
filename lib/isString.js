/**
 * `isString` returns true if the value is a string and false for others.
 *
 * @params {*} value Any value.
 * @returns {boolean}
 */
function isString(value) {
  return typeof value === "string";
}

module.exports = isString;
