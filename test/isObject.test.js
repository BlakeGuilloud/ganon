const { isObject } = require("../lib");

describe("isObject", () => {
  test("isObject returns true for an object", () => {
    expect(isObject({ hello: "hello" })).toBe(true);
  });

  test("isObject returns true for an empty object", () => {
    expect(isObject({})).toBe(true);
  });

  test("isObject returns false for an array", () => {
    expect(isObject([1, 2, 3])).toBe(false);
    expect(isObject([])).toBe(false);
  });

  test("isObject returns false for a string", () => {
    expect(isObject("hello")).toBe(false);
  });
});