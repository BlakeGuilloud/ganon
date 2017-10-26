const { isBetween } = require("../lib");

describe("isBetween", () => {
  it("should throw if candidate param is not a Number", () => {
    expect(() => isBetween("", [1, 55]))
      .toThrow("candidate must be type Number");
    expect(() => isBetween(null, [1, 55]))
      .toThrow("candidate must be type Number");
    expect(() => isBetween(true, [1, 55]))
      .toThrow("candidate must be type Number");
  });

  it("should throw if range param is not an Array", () => {
    expect(() => isBetween(4, {})).toThrow("range must be type Array");
    expect(() => isBetween(4, 600)).toThrow("range must be type Array");
    expect(() => isBetween(4)).toThrow("range must be type Array");
  });

  it("should throw if range param items are not Numbers", () => {
    expect(() => isBetween(4, ["foo", "bar"]))
      .toThrow("range items must be Numbers");
    expect(() => isBetween(4, []))
      .toThrow("range items must be Numbers");
    expect(() => isBetween(4, [2, Infinity]))
      .toThrow("range items must be Numbers");
  });

  it("should throw if range[0] > range[1]", () => {
    expect(() => isBetween(4, [77, 7]))
      .toThrow("range[0] must be less than or equal to range[1]");
    expect(() => isBetween(4, [77, -7]))
      .toThrow("range[0] must be less than or equal to range[1]");
    expect(() => isBetween(100, [77, 76]))
      .toThrow("range[0] must be less than or equal to range[1]");
  });

  it("should return true when candidate equals range limits inclusive", () => {
    expect(isBetween(7, [7, 11])).toEqual(true);
    expect(isBetween(11, [7, 11])).toEqual(true);
  });

  it("should return false when candidate equals range limits exclusive", () => {
    expect(isBetween(7, [7, 11], false)).toEqual(false);
    expect(isBetween(11, [7, 11], false)).toEqual(false);
  });

  it("should return true when candidate falls within range", () => {
    expect(isBetween(7, [-7, 11])).toEqual(true);
    expect(isBetween(0, [-1, 1])).toEqual(true);
  });

  it("should return false when candidate falls outside range", () => {
    expect(isBetween(12, [-7, 11])).toEqual(false);
    expect(isBetween(100, [-1, 1])).toEqual(false);
  });
});
