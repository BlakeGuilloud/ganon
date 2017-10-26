const { convertRadiansToDegrees } = require("../lib");

describe("convertRadiansToDegrees", () => {
  it("should only take numbers", () => {
    expect(() => convertRadiansToDegrees(null)).toThrow();
    expect(() => convertRadiansToDegrees(false)).toThrow();
    expect(() => convertRadiansToDegrees({})).toThrow();
    expect(() => convertRadiansToDegrees([])).toThrow();
    expect(() => convertRadiansToDegrees("")).toThrow();
  });
  it("should convert radians to degrees", () => {
    expect(convertRadiansToDegrees(0)).toEqual(0);
    expect(convertRadiansToDegrees(Math.PI / 2)).toEqual(90);
    expect(convertRadiansToDegrees(Math.PI)).toEqual(180);
    expect(convertRadiansToDegrees(Math.PI * 3 / 2)).toEqual(270);
  });
  it("should not wrap around", () => {
    expect(convertRadiansToDegrees(2 * Math.PI)).toEqual(360);
    expect(convertRadiansToDegrees(239847)).toEqual(13742220.828874256);
  });
});
