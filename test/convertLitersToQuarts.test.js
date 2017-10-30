const { convertLitersToQuarts } = require("../lib");

describe("convertLitersToQuarts", () => {
  test("function converts liters to quarts correctly", () => {
    expect(convertLitersToQuarts(1)).toBe(1.06);
    expect(convertLitersToQuarts(5)).toBe(5.28);
    expect(convertLitersToQuarts(20)).toBe(21.13);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertLitersToQuarts(null)).toThrow();
    expect(() => convertLitersToQuarts(true)).toThrow();
    expect(() => convertLitersToQuarts(false)).toThrow();
    expect(() => convertLitersToQuarts(undefined)).toThrow();
    expect(() => convertLitersToQuarts([])).toThrow();
  });

  test("throw error when the input is negative", () => {
    expect(() => convertLitersToQuarts(-1)).toThrow();
  });
});
