const { reverseArray } = require("../lib");

describe("reverseArray", () => {
  it("works on the empty list", () => {
    expect(reverseArray([])).toEqual([]);
  });

  it("works on a singleton", () => {
    expect(reverseArray([1])).toEqual([1]);
  });

  it("works on bigger lists", () => {
    expect(reverseArray([1,2])).toEqual([2, 1]);
    expect(reverseArray([1,2,6])).toEqual([6, 2, 1]);
    expect(reverseArray([1,1,2,3,5,8,13])).toEqual([13, 8, 5, 3, 2, 1, 1]);
    expect(reverseArray(["pen", "pineapple", "apple", "pen"]))
      .toEqual(["pen", "apple", "pineapple", "pen"]);
  });

  it("should throw an error if arr is not an array", () => {
    expect(() => reverseArray(false)).toThrow();
    expect(() => reverseArray(null)).toThrow();
    expect(() => reverseArray(-5)).toThrow();
    expect(() => reverseArray({})).toThrow();
    expect(() => reverseArray("five")).toThrow();
  });
});
