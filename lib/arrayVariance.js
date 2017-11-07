/**
* return the variance of an number array
* @param {Array} arr the array as input
* @return {Number} return the variance as a number
*/
function arrayVariance(arr) {
  if (!Array.isArray(arr) || (arr.length && typeof arr[0] != "number"))
    throw new Error("invalid input");

  const mean = arr.reduce((sum, value) => sum + value, 0) / arr.length;
  const summation = arr.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0);

  return summation / arr.length;
}

module.exports = arrayVariance;
