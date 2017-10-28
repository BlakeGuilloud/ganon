/**
 * `groupBy` takes an Array and creates a new object composed of keys generated from
 * running each element in the Array through test function. The corresponding value of each
 * key is an array of elements responsible for generating the keys. 'test' function takes one
 * argument.
 *
 * @params {Array} Array of elements
 * @params {Function} test  function to be used as a truth test. Takes one parameter
 * @returns {Object} Object with values grouped by keys
 */
function groupBy(arr, test) {
  return arr.reduce((accum, x) => {
    const k = test(x);

    if (!Array.isArray(accum[k])) {
      accum[k] = [];
    }

    accum[k].push(x);

    return accum;
  }, {});
}

module.exports = groupBy;
