/**
 * Constructs the result array based on the rules for the
 * cartesian product.
 * Examople:
 * [1, 2] x [3, 4] = [[1, 3], [1, 4], [2, 3], [2, 4]]
 *
 * Methos should throw an error if parameters are not arrays.
 */
function cartesian(...arr) {
  if (arr.some(el => !Array.isArray(el))) {
    throw new Error("Parameters must be arrays!");
  }

  if (arr.length === 1) {
    return arr[0].map(el => [el]);
  }

  const [arr1, arr2, ...rest] = arr;

  const res = [];
  arr[0].forEach(a => arr[1].forEach(b => Array.isArray(a) ? res.push([...a, b]) : res.push([a, b])));

  return rest.length > 0 ? cartesian(res, ...rest) : res;
}

module.exports = cartesian;
