/**
  Find all occurances of given element in an array and removes it
  from the array
  @param {array} arr
  @param {number} b
  @returns {array or boolean} array if found atleast single occurrence else false
*/

function findAndRemove(arr, b) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }
  if (b === undefined || b === null) {
    throw new Error("Second argument is required");
  }
  return arr.includes(b)
    ? arr.filter((val) => val != b)
    : false;
}

module.exports = findAndRemove;
