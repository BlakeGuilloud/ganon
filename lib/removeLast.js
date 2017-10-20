// Write a function that returns the contents of an array without the final element.

function removeLast(a) {
  return a && a.length && a.slice(0, a.length - 1);
}

module.exports = removeLast;
