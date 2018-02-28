/**
 * `isSymbol` returns true if the value is a Symbol and false for any other type.
 *
 * @params {*} value Any value.
 * @returns {boolean}
 */
function isSymbol(value) {
  return typeof value === "symbol";
}

module.exports = isSymbol;
