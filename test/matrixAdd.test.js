const { matrixAdd } = require("../lib");

describe("matrixAdd", () => {
  test("matrixAdd(A, B) where A & B are matrices with identical dimensions (2d, 3d, 4d, ... nd), should return matrix C which is the sum of A & B", () => {
    expect(matrixAdd([[1, 3, 1], [1, 0, 0]], [[0, 0, 5], [7, 5, 0]])).toBe([[1, 3, 6], [8, 5, 0]]);
    expect(matrixAdd([[1, 3], [1, 0], [1, 2]], [[0, 0], [7, 5], [2, 1]])).toBe([[1, 3], [8, 5], [3, 3]]);
  });
  // Add additional test cases!
});
