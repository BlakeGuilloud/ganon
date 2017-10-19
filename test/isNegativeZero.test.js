const { isNegativeZero } = require("../lib");

test("isNegativeZero returns true for -0", () => {
  expect(isNegativeZero(-0)).toBe(true);
});

test("isNegativeZero returns false for +0", () => {
  expect(isNegativeZero(0)).toBe(false);
});

test("isNegativeZero returns false for NaN", () => {
  expect(isNegativeZero(NaN)).toBe(false);
});

test("isNegativeZero returns false for any number != -0", () => {
  expect(isNegativeZero(42)).toBe(false);
});