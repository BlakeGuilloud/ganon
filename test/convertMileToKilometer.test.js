const { convertMileToKilometer } = require("../lib");

describe("convertMileToKilometer", () => {
  test("1 mile is 1.609344 kilometers", () => {
    expect(convertMileToKilometer(1)).toBeCloseTo(1.609344, 4);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertMileToKilometer(null)).toThrow();
    expect(() => convertMileToKilometer("4.5")).toThrow();
  });
});