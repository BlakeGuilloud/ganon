function arraySum(array) {
  var sum = 0;
  Array.prototype.forEach.call(array, (elem) => {
    if (typeof elem == "number" && !Number.isNaN(elem) && Number.isFinite(elem)) {
      sum += elem;
    }
  });
  return sum;
}

module.exports = arraySum;
