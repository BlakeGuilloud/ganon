/*
 * `takeWhile` take a slice of an array, elements will be taken
 * from the begining of the array until selector returns false
 *
 * @params {Array} array from which values will be iterated
 * @params {Function} predicate function to determine when to stop iterating
 * @returns {Array} slice of the array
 */
function takeWhile(ary, predicate) {
  if (arguments.length != 2 || !Array.isArray(ary) || typeof predicate != "function")
    throw new Error();

  for (var i = 0; i < ary.length; i++) {
    if(!predicate(ary[i]))
      return ary.slice(0, i);
  }

  return ary.slice(0, ary.length);
}

module.exports = takeWhile;
