/**
 * This method should return mean of the integer array, throw error if array contain non-integer element
 * @param {[]} arr
 * @returns {Number}
 */

function arrayMean(arr){

  // Check if arr is an Array
  if (!Array.isArray(arr)) {
    throw new Error("Invalid Type");
  }

  // Grab the array length and start mean result value with 0
  const length = arr.length;
  let mean = 0;

  // Calculate mean if there is any value on array, otherwise, return 0
  if (length > 0) {
    // Sum array values
    const sum = arr.reduce((sum, value) => {

      // Check if value is a number
      if (isNaN(parseFloat(value)) || !isFinite(value)) {
        throw new Error("Invalid Argument");
      }

      return sum + value;

    }, 0);

    // Get mean value by dividing sum with the number of elements in arr
    mean = sum / length;

  }

  // Fix mean result to 2-digits and parse to number again
  const fixedMean = mean.toFixed(2) / 1;

  return fixedMean;

}

module.exports = arrayMean;
