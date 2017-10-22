const { isArray } = require("../lib");

describe("isArray", () => {
  test("returns true for an empty array", () => {
    expect(isArray([])).toEqual(true);
  });

  test("returns true for a multi type array", () => {
    expect(isArray([1, "2", {}, null])).toEqual(true);
  });

  test("returns false for a number", () => {
    expect(isArray(1)).toEqual(false);
  });

  test("returns false for a string", () => {
    expect(isArray("1")).toEqual(false);
  });

  test("returns false for an object", () => {
    expect(isArray({})).toEqual(false);
    expect(isArray({ "0": [], "1": [] })).toEqual(false);
  });

  test("returns true for an Array subclass", () => {
    class SubArray extends Array {
      constructor(...args) {
        super(...args);
      }
    }

    const subArray = new SubArray(1, 2, 3);
    expect(isArray(subArray)).toEqual(true);
  });
});