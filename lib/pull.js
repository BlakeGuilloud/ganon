/**
 * Removes all given values from array using SameValueZero for equality comparisons.
 * @param array: The array to modify
 * @param values: The values to remove
 */

const flattenArray = require("./flattenArray.js");
const isArray = require("./isArray.js");


function pull(array, ...values) {
  if (!isArray(array)) {
    throw new Error("Provided value must be an array");
  }
  return array.filter(e => flattenArray(values).indexOf(e) < 0);
}

module.exports = pull;
