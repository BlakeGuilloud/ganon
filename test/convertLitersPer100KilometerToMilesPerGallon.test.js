const { convertLitersPer100KilometerToMilesPerGallon } = require("../lib");

describe("convertLitersPer100KilometerToMilesPerGallon", () => {
  test("1 l/100 km is 235.21458 MPG", () => {
    expect(convertLitersPer100KilometerToMilesPerGallon(1)).toBeCloseTo(235.21458, 3);
    expect(convertLitersPer100KilometerToMilesPerGallon(42.34)).toBeCloseTo(5.55537, 3);
    expect(convertLitersPer100KilometerToMilesPerGallon(123.45)).toBeCloseTo(1.90534, 3);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertLitersPer100KilometerToMilesPerGallon(null)).toThrow();
    expect(() => convertLitersPer100KilometerToMilesPerGallon(true)).toThrow();
    expect(() => convertLitersPer100KilometerToMilesPerGallon(undefined)).toThrow();
    expect(() => convertLitersPer100KilometerToMilesPerGallon("4.5")).toThrow();
  });
});