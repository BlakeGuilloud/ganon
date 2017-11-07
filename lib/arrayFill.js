/**
 * returns new array replaced with new value from start to end position.
 *
 * @param {Array} arr the array as input.
 * @param {any} value the value that you would like to replace in the array
 * @param {Number} start the start position will be replaced with value
 * @param {Number} end the end position will be replaced with value
 * @return {Array} the new array as replace value.
 *
 */

function arrayFill(arr = [], value, start = 0, end = arr.length) {
  let newArr = arr.map( (defaultValue,idx) => {
    return idx >= start && idx < end ? value : defaultValue;
  } );
  return newArr;
}

module.exports = arrayFill;
