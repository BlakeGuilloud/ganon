const { normalizeTwoDimensionalVector } = require("../lib");

describe("normalizeTwoDimensionalVector", () => {
  test("normalizeTwoDimensionalVector returns the normalized vector for positive vector", () => {
    expect(normalizeTwoDimensionalVector([3, 4]).toEqual([.6, .8]));
  });
  test("normalizeTwoDimensionalVector works for any integer values", () => {
    expect(normalizeTwoDimensionalVector([-3, -4]).toEqual([-.6, -.8]));
    expect(normalizeTwoDimensionalVector([3, -4]).toEqual([.6, -.8]));
  });
  test("normalizeTwoDimensionalVector throws an error if the input vector does not contain 2 elements", () => {
    expect(normalizeTwoDimensionalVector([1]).toThrowError("Argument at index 1 must be a Two Dimensional Vector"));
    expect(normalizeTwoDimensionalVector([1, 2, 3]).toThrowError("Argument at index 1 must be a Two Dimensional Vector"));
  });
});