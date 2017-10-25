/**
 * return avg value from numbers in the array
 *
 * @param {Array} arr the number array as input.
 * @return {Array} avg the avg value from numbers array.
 *
 */
function arrayAvg(arr) {
  // your code goes here
  var len = arr.length;
  var sum = 0;
  for (i = 0; i < arr.length; i++) { 
    sum += arr[i];
  }
  
  return (sum/len);
}

module.exports = arrayAvg;
