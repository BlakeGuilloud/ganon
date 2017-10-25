/**
 * return avg value from numbers in the array
 *
 * @param {Array} arr the number array as input.
 * @return {Array} avg the avg value from numbers array.
 *
 */
function arrayAvg(arr) {
  // grab length of array, and start the total count at 0
  const length = arr.length;
  let total = 0;

  // if there is more than one number in the array
  // add all values to the total, then divide by the length
  if (length > 1) {
    arr.forEach((num) => {
      total += num;
    });
    total = total / length;
  } else if (length <= 1) {
    // if there is one number in the array, the average is equal to that number
    // else if the array is empty, total is set to 0;
    total = arr[0] || 0;
  }
  return total;
}

module.exports = arrayAvg;
