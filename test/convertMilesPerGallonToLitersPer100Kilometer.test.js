const { convertMilesPerGallonToLitersPer100Kilometer } = require("../lib");

describe("convertMilesPerGallonToLitersPer100Kilometer", () => {
  test("1 MPG is 235.21458 l/100 km", () => {
    expect(convertMilesPerGallonToLitersPer100Kilometer(1)).toBeCloseTo(235.21458, 3);
    expect(convertMilesPerGallonToLitersPer100Kilometer(42.34)).toBeCloseTo(5.55537, 3);
    expect(convertMilesPerGallonToLitersPer100Kilometer(123.45)).toBeCloseTo(1.90534, 3);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertMilesPerGallonToLitersPer100Kilometer(null)).toThrow();
    expect(() => convertMilesPerGallonToLitersPer100Kilometer(true)).toThrow();
    expect(() => convertMilesPerGallonToLitersPer100Kilometer(undefined)).toThrow();
    expect(() => convertMilesPerGallonToLitersPer100Kilometer("4.5")).toThrow();
  });
});