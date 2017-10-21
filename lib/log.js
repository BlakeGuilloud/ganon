// Write a function that returns the natural logarithm (base e) of a number
function log(a) {
  if(!(typeof a == "number" && !Number.isNaN(a) && Number.isFinite(a))) {
    throw "not a valid number";
  }
  return Math.log(a);
}

module.exports = log;