function arraySum(array) {
  var finalSum = 0;
  finalSum = array.reduce(function(sum, elem) {
    if (typeof elem == "number" && !Number.isNaN(elem) && Number.isFinite(elem)) {
      return sum + elem;
    }
    return sum;
  });
  return finalSum;
}

module.exports = arraySum;
