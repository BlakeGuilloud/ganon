/**
 * Rotates the elements of an array to the right by a given offset.
 * This function may modify the input array.
 * @param  {inputArray} the array to be rotated
 * @param  {offset} the number of places to rotate the array by.
 *                  This value is assumed to be non-negative.
 * @return {array} the rotated array
 */

function rotateArray(inputArray, offset) {
  const arrayLength = inputArray.length;
  if (offset === 0 || arrayLength === 0 || arrayLength === 1 || arrayLength === offset) {
    return inputArray;
  }

  const rotation = arrayLength - offset;

  return inputArray.slice(rotation).concat(inputArray.slice(0, rotation));
}

module.exports = rotateArray;
