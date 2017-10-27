const { isInteger } = require("../lib");

describe("isInteger", () => {
  it("should fail for decimal numbers", () => {
    expect(isInteger(0.77)).toBe(false);
    expect(isInteger(0.0001)).toBe(false);
    expect(isInteger(-12.888)).toBe(false);
  });

  it("should fail for non numbers", () => {
    expect(isInteger([])).toBe(false);
    expect(isInteger("bingBangBaz")).toBe(false);
    expect(isInteger({})).toBe(false);
  });

  it("should pass for all whole numbers and negative counterparts", () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(1)).toBe(true);
    expect(isInteger(100)).toBe(true);
    expect(isInteger(-10000)).toBe(true);
    expect(isInteger(-1)).toBe(true);
  });

  it("should pass for integer-returning expressions", () => {
    expect(isInteger(4 / 2)).toBe(true);
    expect(isInteger(7 + 1)).toBe(true);
    expect(isInteger(12 - 10000)).toBe(true);
  });

  it("should fail for NaN", () => {
    expect(isInteger(NaN)).toBe(false);
  });

  it("should fail for Infinite numbers", () => {
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
  });

  it("should fail for an array with integers", () => {
    expect(isInteger([1])).toBe(false);
    expect(isInteger([1, 2, 3])).toBe(false);
  });
});
