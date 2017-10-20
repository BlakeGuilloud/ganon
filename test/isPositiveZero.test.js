const { isPositiveZero } = require("../lib");

describe("isPositiveZero", () => {
  test("isPositiveZero returns true for 0", () => {
    expect(isPositiveZero(0)).toBe(true);
  });

  test("isPositiveZero returns false for -0", () => {
    expect(isPositiveZero(-0)).toBe(false);
  });

  test("isPositiveZero returns false for NaN", () => {
    expect(isPositiveZero(NaN)).toBe(false);
  });

  test("isPositiveZero returns false for any number != 0", () => {
    expect(isPositiveZero(42)).toBe(false);
  });
});
