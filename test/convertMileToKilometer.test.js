const { convertMileToKilometer } = require("../lib");

describe("convertMileToKilometer", () => {
  test("1 mile is 1.609344 kilometers", () => {
    expect(convertMileToKilometer(1)).toBeCloseTo(1.609344, 4);
    expect(convertMileToKilometer(15.42)).toBeCloseTo(24.816084, 4);
    expect(convertMileToKilometer(22)).toBeCloseTo(35.405568, 4);
    expect(convertMileToKilometer(532)).toBeCloseTo(856.171008, 4);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertMileToKilometer(null)).toThrow();
    expect(() => convertMileToKilometer(0)).toThrow();
    expect(() => convertMileToKilometer(true)).toThrow();
    expect(() => convertMileToKilometer(undefined)).toThrow();
    expect(() => convertMileToKilometer("4.5")).toThrow();
  });
});