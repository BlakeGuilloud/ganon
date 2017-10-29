// Write a function that returns the square of the first parameter

function square(a) {
  if (typeof a != "number") {
    throw new Error("Paramter must be a number.");
  }
  return a * a;
}

module.exports = square;
