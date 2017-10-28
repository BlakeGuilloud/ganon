const { convertKilometerToMach } = require("../lib");

describe("convertKilometerToMach", () => {
  test("1 kilometer is 0.000809848 march", () => {
    expect(convertKilometerToMach(1)).toBeCloseTo(0.000809848, 4);
    expect(convertKilometerToMach(5.5)).toBeCloseTo(0.00445416, 4);
    expect(convertKilometerToMach(0)).toBeCloseTo(0, 4);
  });
  test("throw error when the argument is not a number", () => {
    expect(() => convertKilometerToMach(null)).toThrow();
    expect(() => convertKilometerToMach(true)).toThrow();
    expect(() => convertKilometerToMach(undefined)).toThrow();
    expect(() => convertKilometerToMach("4.5")).toThrow();
  });
});