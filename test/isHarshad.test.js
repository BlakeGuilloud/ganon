const { isHarshad } = require("../lib");

describe("isHarshad", () => {
  test("isHarshad(18) returns true", () => {
    expect(isHarshad(18)).toBe(true);
  });

  test("isHarshad(1729) returns true", () => {
    expect(isHarshad(1729)).toBe(true);
  });

  test("isHarshad(23) returns false", () => {
    expect(isHarshad(23)).toBe(false);
  });

  test("isHarshad(1730) returns false", () => {
    expect(isHarshad(1730)).toBe(false);
  });
  test("throw error when the input is negative", () => {
    expect(() => isHarshad(-1)).toThrow();
  });
  test("throw error when the argument is not a number", () => {
    expect(() => isHarshad(null)).toThrow();
    expect(() => isHarshad(true)).toThrow();
    expect(() => isHarshad(false)).toThrow();
    expect(() => isHarshad(undefined)).toThrow();
    expect(() => isHarshad([])).toThrow();
  });
});
