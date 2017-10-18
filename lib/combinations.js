/**
 * Returns an array of possible combinations of subsets of an array.
 * @param {Array} array from which items will be picked for all combinations of size n
 * @param {Number} n Number of items that will be picked from the array to form a combination
 */

function combinations(array, n) {
  if (!Array.isArray(array)) throw new Error("First argument must be an array.");
  const castedNumber = +n;
  if (Number.isNaN(castedNumber) || castedNumber < 0) throw new Error("Second argument must be a positive number");
  if (array.length === 0 || n === 0) return [];

  if (n === 1) return array.map(i => [i]);

  let resultingCombinations = [];
  for (const [index, item] of array.entries()) {
    const rest = array.slice(index + 1, array.length);
    combinations(rest, n - 1).map(combination => resultingCombinations.push([item, ...combination]));
  }
  return resultingCombinations;
}

module.exports = combinations;
