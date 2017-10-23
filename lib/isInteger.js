/**
 * Write a function that returns true if the value entered is an integer and false if otherwise.
 * @param {any data type} param
 * @returns {Boolean}
 */
function isInteger(param) {
  Number.isInteger = Number.isInteger ||
    function (param) {
      return typeof param === "number"
             && isFinite(param)
             && Math.floor(param) === param;
    };
  return Number.isInteger(param);
}

module.exports = isInteger;
