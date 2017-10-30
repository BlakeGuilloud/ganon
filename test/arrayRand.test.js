const { arrayRand } = require("../lib");

describe("arrayRand", () => {
  test("should return an item contained in passed array", () => {
    let testArr1 = [1, 2, 3, 4, 5, 6];
    expect(testArr1).toContain(arrayRand(testArr1));

    let testArr2 = ["one", "two", "three", "four"];
    expect(testArr2).toContain(arrayRand(testArr2));

    let testArr3 = ["singleitem"];
    expect(testArr3).toContain(arrayRand(testArr3));
  });

  test("should return undefined if passed an empty array", () => {
    expect(arrayRand([])).toBeUndefined();
  });

  test("should throw a TypeError if argument is not an array", () => {
    expect(() => arrayRand()).toThrowError(TypeError);
    expect(() => arrayRand("array")).toThrowError(TypeError);
    expect(() => arrayRand(1)).toThrowError(TypeError);
  });
});
