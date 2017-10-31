/*
 * Returns boolean of is type Function
 *
 * @param {Function} fnToCheck
 * @returns {Boolean}
 */

const isFunction = fnToCheck => {
  var getType = {};

  return !!fnToCheck && getType.toString.call(fnToCheck) === "[object Function]";
};

module.exports = isFunction;
