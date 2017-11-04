const { vectorSum } = require("../lib");

describe("vectorSum", () => {
  test("Should return the sum", () => {
    expect(vectorSum([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(vectorSum([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(vectorSum([1, 2, 3], [1, 2, 3], [1, 2, 3])).toEqual([3, 6, 9]);
    expect(vectorSum([1, 1, 1], [], [1, 1], [0, 0, 0, 0, 0, 5])).toEqual([2, 2, 1, 0, 0, 5]);
    expect(vectorSum()).toEqual([]);
  });

  test("Throw error on invalid type", () => {
    expect(() => vectorSum([1, 2, 3], "one")).toThrow("Invalid Type");
    expect(() => vectorSum([1, 2, 3], "3")).toThrow("Invalid Type");
    expect(() => vectorSum([1, 2, 3], null)).toThrow("Invalid Type");
    expect(() => vectorSum([1, 2, 3], undefined)).toThrow("Invalid Type");
    expect(() => vectorSum([1, 2, 3], ["one"])).toThrow("Invalid Type");
    expect(() => vectorSum([1, 2, 3], ["3"])).toThrow("Invalid Type");
    expect(() => vectorSum([1, 2, 3], [null])).toThrow("Invalid Type");
    expect(() => vectorSum([1, 2, 3], [undefined])).toThrow("Invalid Type");
  });
});
