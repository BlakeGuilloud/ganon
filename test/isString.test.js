const { isString } = require("../lib");

describe("isString", () => {
  test("returns true for an empty string", () => {
    expect(isString("")).toEqual(true);
    expect(isString("hello~")).toEqual(true);
  });

  test("returns false for other data types", () => {
    expect(isString(0)).toEqual(false);
    expect(isString(-1)).toEqual(false);
    expect(isString(["1", "2"])).toEqual(false);
    expect(isString({0: "123"})).toEqual(false);
    expect(isString(null)).toEqual(false);
    expect(isString(undefined)).toEqual(false);
  });
});
