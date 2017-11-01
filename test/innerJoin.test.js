const { innerJoin } = require("../lib");

describe("innerJoin", () => {
  test("Inner join of number array", () => {
    expect(innerJoin([1, 2, 3, 4], [6, 5, 4, 3])).toEqual([3, 4]);
  });

  test("Inner join of string array", () => {
    expect(innerJoin(["The", "quick", "brown", "fox"], ["The", "lazy", "dog"])).toEqual(["The"]);
  });

  test("Throw invalid type", () => {
    // should take two params
    expect(() => innerJoin()).toThrow();

    // both params should be array
    expect(() => innerJoin("a", true)).toThrow();

    // first param should be an array
    expect(() => innerJoin("a", [])).toThrow();

    // second param should be an array
    expect(() => innerJoin([], "a")).toThrow();
  });
});