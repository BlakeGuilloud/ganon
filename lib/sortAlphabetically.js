/**
 * Returns array of words sorted alphabetically in ascending order.
 * @param {Array} inputArray
 * @return {Array}
 **/
function sortAlphabetically(inputArray) {
  if (!Array.isArray(inputArray)) {
    throw "The input is not an array!";
  }
  const orderFunc = (a, b) => ((a > b) ? 1 : -1);

  return inputArray.sort(orderFunc);
}

module.exports = sortAlphabetically;
