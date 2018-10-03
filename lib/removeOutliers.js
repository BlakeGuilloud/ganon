/*
 * Remove all numbers from an array that are more than (distance) standard deviations from the mean
 * @param: {Array, Number} takes an array of numbers and a distance in std devs (default to 1)
 * @return {Array} returns an array of numbers with outlying numbers and nulls/undefined filtered out
 * @throws "Invalid type" if array contains a value that isn't a number
 */

function removeOutliers(array, _distance) {
  const dist = _distance ? _distance : 1;
  throw Error("TODO");
}

module.exports = removeOutliers;
