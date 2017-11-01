/**
 * return avg value from numbers in the array
 *
 * @param {Array} arr the number array as input.
 * @return {Array} avg the avg value from numbers array.
 *
 */
function arrayAvg(arr) {
  // grab length of array, and start the total count at 0
  if (!Array.isArray(arr)) return 0;
  const length = arr.length;
  const total = arr.reduce((accum, val) => val + accum, 0);
  return length === 0 ? total : total / length;
}

module.exports = arrayAvg;
