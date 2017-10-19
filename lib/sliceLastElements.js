"use strict";

/**
 * sliceLastElements
 * @param  {Array}   arr  The array whose elements you want to slice off the end
 * @param  {Integer} n    Number of items sliced off the end
 * @return {Array}        Array of sliced elements
 */
function sliceLastElements(arr, n) {
  return arr.slice(n * -1);
}

module.exports = sliceLastElements;
