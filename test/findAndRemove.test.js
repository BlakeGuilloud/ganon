const { findAndRemove } = require("../lib");

describe("findAndRemove", () => {
  test("returns false when empty array is passed", () => {
    expect(findAndRemove([], 4)).toEqual(false);
  });
  test("throws error when second argument is not passed", () => {
    expect(() => findAndRemove([1, 2, 43, 5])).toThrowError("Second argument is required");
    expect(() => findAndRemove([1, 2, 43, 5], null)).toThrowError("Second argument is required");
  });
  test("returns array with second argument value removed", () => {
    expect(findAndRemove([1, 2, 3, 4, 5, 6, 76, 87, 8, 76, 4], 3)).toEqual([1, 2, 4, 5, 6, 76, 87, 8, 76, 4]);
    expect(findAndRemove([1, 2, 4, 5, 6, 54, 56, 45, 6, 4, 4], 4)).toEqual([1, 2, 5, 6, 54, 56, 45, 6]);
  });
  test("returns false when there is no such value found in array", () => {
    expect(findAndRemove([1, 2, 4, 5, 6, 54, 56, 45, 6, 4, 4], 100)).toEqual(false);
  });
  test("throws error when first argument is not an array", () => {
    expect(() => findAndRemove("string")).toThrowError(TypeError);
    expect(() => findAndRemove({})).toThrowError(TypeError);
    expect(() => findAndRemove(1234)).toThrowError(TypeError);
  });
});