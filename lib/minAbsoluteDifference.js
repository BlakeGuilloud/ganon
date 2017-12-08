/**
 * Given an array of integers, find the minimum absolute difference
 * between any two elements (that do not equal each other) in the array.
 * @param {Array} input
 * @return {Number}
 */

function minAbsoluteDifference(array){
  var diff = Number.MAX_VALUE;
  for(var i = 0;i < array.length - 1;i++) {
    for(var j = i + 1;j < array.length;j++) {
      if(Math.abs(array[i] - array[j]) < diff) {
        diff = Math.abs(array[i] - array[j]);
      }
    }
  }
  return diff;
}

module.exports = minAbsoluteDifference;
