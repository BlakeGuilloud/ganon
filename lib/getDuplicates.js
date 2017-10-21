const valueAtIndexIsFirst = (array, value, index) => array.indexOf(value) === index;
const valueAtIndexOccursAgain = (array, value, index) => array.lastIndexOf(value) !== index;
const isNewDuplicate = array => (value, index) => valueAtIndexIsFirst(array, value, index) && valueAtIndexOccursAgain(array, value, index);

/**
 * Takes an array and returns a new array containing any elements that have duplicates.
 * eg. [1,2,2,3,4,4,5]
 * returns [2,4]
 * @param  {Array} arr array to evaluate
 * @return {Array} the array containing duplicates
 */
const getDuplicates = arr => !Array.isArray(arr)
  ? arr
  : arr.filter(isNewDuplicate(arr));

module.exports = getDuplicates;
