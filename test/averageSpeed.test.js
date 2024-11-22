const { averageSpeed } = require("../lib");

describe("averageSpeed", () => {
  it("should return averages", () => {
    expect(averageSpeed(100, 1)).toEqual(100);
    expect(averageSpeed(220, 2)).toEqual(110);
    expect(averageSpeed(287, 3)).toBeCloseTo(95.666);
  });

  it("should throw error if first value is not a number", () => {
    expect(() => averageSpeed("sdsds", 4)).toThrow("First argument should be a number");
    expect(() => averageSpeed([1], 4)).toThrow("First argument should be a number");
  });

  it("should throw error if first value is not a number", () => {
    expect(() => averageSpeed(100, false)).toThrow("Second argument should be a number");
    expect(() => averageSpeed(100, "dss")).toThrow("Second argument should be a number");
  });
});
