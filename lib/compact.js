/**
 * Returns copy of array without falsy values.
 * FYI in JS falsy values are: null, false, undefined, NaN, 0, ""
 *
 * @param {Array} arr
 * @returns {Array}
 */


function compact(arr) {

  if (arr == null) {
    return new Array();
  }

  return arr.filter(function (val) {
    return val;
  });

}

module.exports = compact;
