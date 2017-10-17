// Write a function that increments the value of the first parameter

function increment(a) {
  if(isNaN(a)) {
    return;
  }
  return a + 1;
}

module.exports = increment;
