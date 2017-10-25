const { roundTo } = require("../lib");

describe("roundTo", () => {
  it("should only take numbers", () => {
    expect(() => roundTo(null, null)).toThrow();
    expect(() => roundTo(false, false)).toThrow();
    expect(() => roundTo({}, {})).toThrow();
    expect(() => roundTo([], [])).toThrow();
    expect(() => roundTo("", "")).toThrow();
  });
  it("should not change integers", () => {
    expect(roundTo(0, 0)).toEqual(0);
    expect(roundTo(2, 0)).toEqual(2);
    expect(roundTo(2, 1)).toEqual(2);
    expect(roundTo(2, 3)).toEqual(2);
  });
  it("should handle different places to round", () => {
    expect(roundTo(0.2, 0)).toEqual(0);
    expect(roundTo(2.3, 0)).toEqual(2);
    expect(roundTo(2.4, 1)).toEqual(2.4);
    expect(roundTo(2.5, 0)).toEqual(3);
    expect(roundTo(2.5, 3)).toEqual(2.5);
    expect(roundTo(2.5000, 3)).toEqual(2.5);
    expect(roundTo(2.5001, 3)).toEqual(2.5);
    expect(roundTo(2.5005, 3)).toEqual(2.501);
    expect(roundTo(2.5005, 4)).toEqual(2.5005);
  });
});
