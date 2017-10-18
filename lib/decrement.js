/**
 * Write a function that decrements the value of the first parameter
 * @param {Number} a
 */
function decrement(a) {
  // write code here
  if(isNaN(a)) {
    return;
  }
  return a - 1;
}

module.exports = decrement;
