const { convertLiterToGallon } = require("../lib");

describe("convertLiterToGallon", () => {
  test("1 liter is 0.264172 gallon", () => {
    expect(convertLiterToGallon(1)).toBeCloseTo(0.264172, 4);
    expect(convertLiterToGallon(42.34)).toBeCloseTo(11.18504248, 4);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertLiterToGallon(null)).toThrow();
    expect(() => convertLiterToGallon(true)).toThrow();
    expect(() => convertLiterToGallon(undefined)).toThrow();
    expect(() => convertLiterToGallon("4.5")).toThrow();
  });
});