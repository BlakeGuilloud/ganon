const { getArrayElementCount } = require("../lib");

describe("getArrayElementCount", () => {
  it("should return count of element in array", () => {
    expect(getArrayElementCount([1, 2, 3543, 2, 42, 4, 3, 5, 5, 4, 4], 4)).toEqual(3);
    expect(getArrayElementCount([3, 5, 3, 67, 7, 4, 34, 56, 7, 8, 5, 4, 5, 67], 0)).toEqual(0);
    expect(getArrayElementCount([3, 5, 3, 5467, 6, 43, 3, 3, 456, 7], [5, 3])).toEqual(5);
    expect(getArrayElementCount([3, 55, 3, 35, 6, 7, 7, 4, 55, 9, 7, 4, 55, 55, 6], [55])).toEqual(4);
    expect(getArrayElementCount([3, 55, 3, 35, 6, 7, 7, 9, 55, 6], [6, 7])).toEqual(4);
    expect(getArrayElementCount([1, 2, 3, 4, 5], [6, 7])).toEqual(0);
  });

  it("should throw error if first arg is not array", () => {
    expect(getArrayElementCount("sdsds", 4)).toThrow("First argument should be an array");
    expect(getArrayElementCount(452755, 4)).toThrow("First argument should be an array");
  });

  it("should throw error if second arg is not present or is not a number or array", () => {
    expect(getArrayElementCount([5, 7, 4, 6, 5, 4], false)).toThrow("Second argument should be number");
    expect(getArrayElementCount([3, 4, 56, 5, 6], "dss")).toThrow("Second argument should be number");
  });
});
