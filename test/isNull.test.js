const { isNull } = require("../lib");

describe("isNull", () => {
  test("should fail with non null values", () => {
    expect(isNull([])).toEqual(false);
    expect(isNull({})).toEqual(false);
    expect(isNull(true)).toEqual(false);
    expect(isNull(false)).toEqual(false);
    expect(isNull("")).toEqual(false);
    expect(isNull(Infinity)).toEqual(false);
    expect(isNull(NaN)).toEqual(false);
    expect(isNull(undefined)).toEqual(false);
    expect(isNull(0)).toEqual(false);
  });

  test("should fail with more or less than 1 argument", () => {
    expect(isNull(null, null)).toEqual(false);
    expect(isNull()).toEqual(false);
  });

  test("should pass with null", () => {
    expect(isNull(null)).toEqual(true);
  });
});
