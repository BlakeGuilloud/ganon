/**
 * Accepts two matrices A and B and returns the matrix A*B.
 *
 * @param {Array} A An array of arrays, where each inner array is an array of
 *                  Numbers.
 * @param {Array} B An array of arrays, where each inner array is an array of
 *                  Numbers.
 *
 * @returns {Array} An array of arrays, where each inner array is an array of
 *                  Numbers.
 *
 * @throws {InvalidDimensions} If A is an n * m matrix and B is an i * j
 *                             matrix, then if m does not equal i an
 *                             `InvalidDimensions` error will be thrown.
 *
 * Example: A = [[2, 2], [0, 2]] | 2 2 |
 *                               | 0 2 |
 *
 *          B = [[3, 0], [1, 1]] | 3 0 |
 *                               | 1 1 |
 *
 *          matMul(A, B) returns [[8, 2], [2, 2]] | 8 2 |
 *                                                | 2 2 |
 */

function matMul(A, B) {
  if (B.length != A[0].length) throw ("InvalidDimensions");
  let dotProductRows = [];
  for (let row = 0; row < A.length; row++){
    let dotProductColumn = B[0].reduce((p, c, bCol) => [...p, A[row].reduce((pp, cc, aCol) => pp + cc * B[aCol][bCol], 0)], []);
    dotProductRows.push(dotProductColumn);
  }
  return dotProductRows;
}

module.exports = matMul;
