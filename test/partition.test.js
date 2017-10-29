const { partition } = require("../lib");

describe("partition", () => {
  test("should partition array slices of given length", () => {
    expect(partition([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
    expect(partition([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  test("should partition leftovers into final slice less than given length", () => {
    expect(partition([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(partition([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
  });

  test("should return empty array if passed an empty array", () => {
    expect(partition([], 5)).toEqual([]);
  });

  test("should throw a TypeError if argument 1 is not an array", () => {
    expect(() => partition()).toThrowError(TypeError);
    expect(() => partition("array")).toThrowError(TypeError);
    expect(() => partition(1, [1, 2, 3])).toThrowError(TypeError);
  });
});
