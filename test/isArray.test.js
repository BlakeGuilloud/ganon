const { isArray } = require("../lib");

describe("isArray", () => {
  test("isArray returns true for an array", () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  test("isArray returns true for an empty object", () => {
    expect(isArray([])).toBe(true);
  });

  test("isArray returns false for an object", () => {
    expect(isArray({ name: "john" })).toBe(false);
  });

  test("isArray returns false for a string", () => {
    expect(isArray("hello")).toBe(false);
  });
});