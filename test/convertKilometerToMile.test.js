const { convertKilometerToMile } = require("../lib");

describe("convertKilometerToMile", () => {
  test("1 kilometer is 0.621371 miles", () => {
    expect(convertKilometerToMile(1)).toBeCloseTo(0.621371, 4);
    expect(convertKilometerToMile(42.34)).toBeCloseTo(26.30884814, 4);
    expect(convertKilometerToMile(99)).toBeCloseTo(61.515729, 4);
    expect(convertKilometerToMile(231)).toBeCloseTo(143.536701, 4);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertKilometerToMile(null)).toThrow();
    expect(() => convertKilometerToMile(true)).toThrow();
    expect(() => convertKilometerToMile(undefined)).toThrow();
    expect(() => convertKilometerToMile("4.5")).toThrow();
  });
});