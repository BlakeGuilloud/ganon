/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 *
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 */
function zip (list1, list2) {
  if (!Array.isArray(list1) || !Array.isArray(list2)) {
    return [];
  }
  if (list1.length > list2.length) {
    list1.splice(list2.length, list1.length - list2.length);
  } else {
    list2.splice(list1.length, list2.length - list1.length);
  }
  return list1.map(function(elem, i) {
    return [elem, list2[i]];
  });
}

module.exports = zip;
