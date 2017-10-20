/**
 * @param array: Contains the items that will be used to take elements from
 * @param n: Count of elements to take from given array
 */
function take(array, n) {
  const [h, ...t] = array;
  if (n < 2) {
    return n === 1 ? [h] : [];
  }
  if (h === undefined || t === undefined) {
    return [];
  }
  return [h, ...take(t, n - 1)];
}

module.exports = take;
