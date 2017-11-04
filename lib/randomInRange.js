/**
 * Return a random integer within a given range, inclusive of min and max
 * (i.e., both min and max are possible return values)
 * @param {number} min: the smallest number that should ever be returned
 * @param {number} max: the largest number that should ever be returned
 * @return {number}
 */

function randomInRange(min, max) {
  if (arguments.length !== 2) {
    throw new Error("This function should take exactly two parameters!");
  }

  if (typeof min != "number" || typeof max != "number") {
    throw new Error("Function must take two numbers");
  }

  if (Math.floor(min) != min || Math.floor(max) != max) {
    throw new Error("Parameters must be integers");
  }

  if(parseFloat(min) != min || parseFloat(max) != max) {
    throw new Error("Parameters must be integers");
  }

  if (min > max) {
    throw new Error("The second param should be greater than or equal to the first param");
  }

  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = randomInRange;
