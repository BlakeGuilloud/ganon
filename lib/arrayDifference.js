/**
 * Gets two array and returns a new array containing the items
 * that are in one array but not in the other one.
 * @param {Array} first
 * @param {Array} second
 * @return {Array}
 **/
function arrayDifference( first, second ) {
  const secondSet = new Set(second);

  return first.filter(function (i) {
    return !secondSet.has(i);
  });
}

module.exports = arrayDifference;
