// Write a function that sums all the numerical elements of an array

function arraySum(array) {
  var sum = 0;
  if (array.length == 0) { return -1; }
  for (var i = 0; i < array.length; i++) {
    sum = (typeof array[i] == "number") ? sum + array[i] : sum;
  }
  return sum;
}

module.exports = arraySum;
