
/**
 * Takes two arrays and returns a new array containing unique elements that occur in both arrays
 * eg. [1,2,2,3,4,4,5] and [1,4,4,6]
 * returns [1,4]
 * @param  {Array} arr1 array to evaluate
 * @param  {Array} arr2 array to evaluate
 * @return {Array} the array with unique elements occuring in both arrays
 */

const intersection = (arr1, arr2) => {
  if (!(Array.isArray(arr1) && Array.isArray(arr2))) {
    return [];
  }

  const set2 = new Set(arr2);

  return arr1.filter((value) => set2.has(value)).filter((value, index, self) => self.indexOf(value) === index);
};

module.exports = intersection;
