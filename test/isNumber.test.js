const { isNumber } = require("../lib");

describe("isNumber", () => {
  test("should fail with non Numbers", () => {
    expect(isNumber([-2,18])).toEqual(false);
    expect(isNumber(true)).toEqual(false);
    expect(isNumber(null)).toEqual(false);
    expect(isNumber(false)).toEqual(false);
    expect(isNumber("bar")).toEqual(false);
    expect(isNumber({})).toEqual(false);
    expect(isNumber(Infinity)).toEqual(false);
  });

  test("should pass with Numbers", () => {
    expect(isNumber(30)).toEqual(true);
    expect(isNumber(-99)).toEqual(true);
    expect(isNumber(0.02)).toEqual(true);
    expect(isNumber(88.8)).toEqual(true);
    expect(isNumber(3 / 4)).toEqual(true);
  });
});
