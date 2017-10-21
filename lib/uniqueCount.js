//Return the number of unique elements in the array

function uniqueCount(arr) {
  if (Array.isArray(arr)) {
    return [...new Set(arr)].length;
  }

  throw "arr is not an Array";
}

module.exports = uniqueCount;
