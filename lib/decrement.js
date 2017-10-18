// Write a function that decrements the value of the first parameter

function decrement(a) {
  if(isNaN(a)) {
    return;
  } else {
    return --a;
  }
}

module.exports = decrement;
