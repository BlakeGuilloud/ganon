const { isFunction } = require("../lib");

describe("isFunction", () => {
  test("should return true for all functions", () => {
    function bing() { return "bing";}

    expect(isFunction(() => "foo")).toEqual(true);
    expect(isFunction(function() { return "xyz";})).toEqual(true);
    expect(isFunction(bing)).toEqual(true);
    expect(isFunction(function bing() { return "bing";})).toEqual(true);
    expect(isFunction(Array.toString)).toEqual(true);
  });

  test("should return false for non-functions", () => {
    expect(isFunction({})).toEqual(false);
    expect(isFunction("")).toEqual(false);
    expect(isFunction([1,2].toString())).toEqual(false);
    expect(isFunction(null)).toEqual(false);
  });
});
