const { geometricMean } = require("../lib");
const nonNegErr = "numArr must be comprised of non-negative Numbers";
const nonArrErr = "numArr must be of type Array";

describe("geometricMean", () => {
  test("should fail with negative numbers", () => {
    expect(() => geometricMean([-2,18])).toThrow(nonNegErr);
  });

  test("should fail with mixed type Arrays", () => {
    expect(() => geometricMean(["foo", {}, 18])).toThrow();
  });

  test("should fail with non Array types", () => {
    expect(() => geometricMean("bing")).toThrow(nonArrErr);
    expect(() => geometricMean({})).toThrow(nonArrErr);
    expect(() => geometricMean(Infinity)).toThrow(nonArrErr);
    expect(() => geometricMean(null)).toThrow(nonArrErr);
    expect(() => geometricMean(true)).toThrow(nonArrErr);
  });

  test("geometric mean of [2,18] to equal 6", () => {
    expect(geometricMean([2,18])).toEqual(6);
  });

  test("geometric mean of [10, 51.2, 8] to equal 16", () => {
    expect(geometricMean([10, 51.2, 8])).toBeCloseTo(16, 5);
  });

  test("geometric mean of [10, 30, 100] to equal 31.07233", () => {
    expect(geometricMean([10, 30, 100])).toBeCloseTo(31.07233, 5);
  });
});
