/*
 * Implement your own map function, obviously without using JavaScript's map function
 * @param: {Array, Function} takes an array and a callback function as parameters
 * @return {Array} returns an array of elements which represent the results of the
 *  callback function being applied to each element of the input array
 */

function mapArray(array, callback) {
  if (array.constructor !== Array) {
    throw new Error("First argument is not an array.");
  }

  if (typeof callback !== "function") {
    throw new Error("Second argument is not a function.");
  }

  var tempArray = array.slice();
  return callback(tempArray);
}

module.exports = mapArray;
