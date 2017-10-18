/**
 * Removes items from an array by identity. (This method does not mutate the array).
 * @param {Array} array from which will be copied without provided items
 * @param {...any} itemsToRemove these items will be missing in the created array.
 * @returns Array new array that does not contain items in itemsToRemove
 */

function without(array, ...itemsToRemove) {
  if (!Array.isArray(array)) {
    throw "First argument is not an array";
  } else if (itemsToRemove.length === 0) {
    throw "List of items to remove is empty";
  }
  let ret = [];
  for (let i of array) {
    if (!itemsToRemove.includes(i)){
      ret.push(i);
    }
  }
  if (ret.length === array.length) {
    return array;
  }
  return ret;
}

module.exports = without;
