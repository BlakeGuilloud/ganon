const { findAndRemove } = require("../lib");

describe("findAndRemove returns true if atleast single occurrence was found and removed successfully", () => {
  test("when empty array is passed", () => {
    expect(findAndRemove([], 4)).toEqual(false);
  });
  test("when second argument is not passed", () => {
    expect(findAndRemove([1, 2, 43, 5])).toThrowError("Second argument is required");
  });
  test("findAndRemove returns true and removes ", () => {
    expect(findAndRemove([1, 2, 3, 4, 5, 6, 76, 87, 8, 76, 4], 3)).toEqual([1, 2, 4, 5, 6, 76, 87, 8, 76, 4]);
    expect(findAndRemove([1, 2, 4, 5, 6, 54, 56, 45, 6, 4, 4], 4)).toEqual([1, 2, 5, 6, 54, 56, 45, 6]);
  });
  test("findAndRemove returns false when there is no such number found in array", () => {
    expect(findAndRemove([1, 2, 4, 5, 6, 54, 56, 45, 6, 4, 4], 100)).toEqual(false);
  });
});