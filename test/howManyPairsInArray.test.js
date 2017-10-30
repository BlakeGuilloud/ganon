const { howManyPairsInArray } = require("../lib");

describe("howManyPairsInArray", () => {
  test("function counts pairs correctly", () => {
    expect(howManyPairsInArray([1,2,3,2,4,5])).toBe(1);
    expect(howManyPairsInArray([1,2,3,2,4,5,2])).toBe(0);
    expect(howManyPairsInArray([1,2,3,2,4,5,5])).toBe(2);
    expect(howManyPairsInArray([1,2,3,2,4,5,5,5])).toBe(1);
  });
  test("throw error when parameter is null", () => {
    expect(() => howManyPairsInArray(null)).toThrow();
  });
});
