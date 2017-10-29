const { matrixAdd } = require("../lib");

/**
 * Define Matrix to be an array(s) of integers.
 *
 * Single Dimentional Martrix = [1,2,3] [[1],[2],[3]]
 * Multidimentional :
 * [
 *  [1,2,3],
 *  [1,2,3],
 *  [1,2,3]
 * ]
 */

describe("matrixAdd", () => {
  test("matrixAdd(A, B) where A & B are matrices with identical dimensions (2d, 3d, 4d, ... nd), should return matrix C which is the sum of A & B", () => {
    expect(matrixAdd([[1, 3, 1], [1, 0, 0]], [[0, 0, 5], [7, 5, 0]])).toEqual([[1, 3, 6], [8, 5, 0]]);
    expect(matrixAdd([[1, 3], [1, 0], [1, 2]], [[0, 0], [7, 5], [2, 1]])).toEqual([[1, 3], [8, 5], [3, 3]]);
  });
  test("matrixAdd(A) where A is a matrix of n dimensions should return A", ()=>{
    expect(matrixAdd([[1,2], [2,3]])).toEqual([[1,2], [2,3]]);
  });
  test("matrixAdd(B) where B is a number | string | unsupported object should return 0", ()=>{
    expect(matrixAdd(2)).toBe(0);
    expect(matrixAdd("")).toBe(0);
    expect(matrixAdd("matrix")).toBe(0);
    expect(matrixAdd({matrix: "error!"})).toBe(0);
    expect(matrixAdd([1, [1, 2]])).toBe(0);
  });
});
