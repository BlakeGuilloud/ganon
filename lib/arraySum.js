function arraySum(array) {
  return array.reduce(function(sum, elem) {
    if (typeof elem == "number" && !Number.isNaN(elem) && Number.isFinite(elem)) {
      return sum + elem;
    }
    return sum;
  }, 0);
}

module.exports = arraySum;
