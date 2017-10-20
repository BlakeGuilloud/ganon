/**
 * TODO: Write a function that drops the first n elements from given array
 * @param array: Contains the items that will be used to remove elements from
 * @param n: Count of elements to drop from given array
 */
function drop(array, n) {
  if( n > 0 ) {
    array.splice(0, n);
  }

  return array;
}

module.exports = drop;
