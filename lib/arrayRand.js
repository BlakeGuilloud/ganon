/**
 * Return a random item from a given array
 * @param {Array} arr The array to pick from
 * @return A random item from the array
 */

// thanks to SO for the elegant solution
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayRand(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Argument must be an array.");
  }

  let min = 0;
  let max = arr.length - 1;

  return arr[randomIntFromInterval(min, max)];
}

module.exports = arrayRand;