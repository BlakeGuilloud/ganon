/**
 * `takeUntil` returns an array containing all elements from the beginning of a given array
 * up to but not including the first element that satisfies the given predicate
 *
 * @param {Array} array from which values will be iterated
 * @param {Function} predicate function to determine when to stop iterating
 * @returns {Array} slice of the array
 **/

function takeUntil(array, predicate) {
  // Validate params.
  if (arguments.length !== 2) {
    throw new Error(`Expected 2 arguments; saw ${arguments.length}.`);
  }
  if (!array || !Array.isArray(array)) {
    throw new Error("First argument must be an array.");
  }
  if (!predicate || typeof predicate !== "function") {
    throw new Error("Second argument must be a function.");
  }
  // Params look ok. Do the thing!
  let stopIndex = array.findIndex(predicate);
  if (stopIndex === -1) {
    return array.slice(0);
  }
  return array.slice(0, stopIndex);
}

module.exports = takeUntil;
