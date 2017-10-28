const { arrayVariance } = require("../lib");

describe("arrayVariance", () => {
  test("variance in [1, 2, 3, 4] is 1.25", () => {
    expect(arrayVariance([1, 2, 3, 4])).toBe(1.25);
  });

  test("variance of [-2, -4, -5, -6] is ", () => {
    expect(arrayVariance([-2, -4, -5, -6])).toBe(2.1875);
  });

  test("Throw invalid type", () => {
    expect(() => arrayVariance(NaN)).toThrow("invalid input");
    expect(() => arrayVariance(null)).toThrow("invalid input");
    expect(() => arrayVariance(undefined)).toThrow("invalid input");
    expect(() => arrayVariance({})).toThrow("invalid input");
    expect(() => arrayVariance(["one", "two", "three"])).toThrow("invalid input");
    expect(() => arrayVariance("string")).toThrow("invalid input");
  });
});