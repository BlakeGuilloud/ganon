const { convertGallonToLiter } = require("../lib");

describe("convertGallonToLiter", () => {
  test("1 gallon is 3.78541 liter", () => {
    expect(convertGallonToLiter(1)).toBeCloseTo(3.78541, 4);
    expect(convertGallonToLiter(42.34)).toBeCloseTo(160.2742594, 4);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertGallonToLiter(null)).toThrow();
    expect(() => convertGallonToLiter(true)).toThrow();
    expect(() => convertGallonToLiter(undefined)).toThrow();
    expect(() => convertGallonToLiter("4.5")).toThrow();
  });
});