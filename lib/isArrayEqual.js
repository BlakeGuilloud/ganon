/**
 * check if two array are the same, ignore the order of the array
 * e.g isArrayEqual([1,2,3], [3,2,1]) => true
 * @param {Array} arrOne the first array
 * @param {Array} arrTwo the second array
 * @return {Boolean} result
 */
function isArrayEqual(arrOne, arrTwo) {
  if (!Array.isArray(arrOne) || !Array.isArray(arrTwo)) {
    throw new Error("Invalid Argument");
  }

  if (!arrOne || !arrTwo || arrOne.length !== arrTwo.length) {
    return false;
  }

  arrOne.sort();
  arrTwo.sort();

  for (var i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }

  return true;
}

module.exports = isArrayEqual;