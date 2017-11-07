/**
 * `Smallest` takes an Array and returns the smallest element according to the
 * given ordering function.
 * @params {Array} Array of elements
 * @params {Function} test Test function that returns true when a is smaller than b
 * @returns {any} The smallest element in the input array
 */
function smallest(arr, test) {
  // your code here
  var smallestItem = arr[0];

  arr.forEach((item) => {
    var itemIsSmaller = test(item, smallestItem);
    if (itemIsSmaller) {
      smallestItem = item;
    }
  });
  return smallestItem;
}

module.exports = smallest;
