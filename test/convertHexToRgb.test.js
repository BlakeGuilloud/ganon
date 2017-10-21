const { convertHexToRgb } = require("../lib");
const invalidHexErr = "hexColor is not a valid hexadecimal color";

describe("convertHexToRgb", () => {
  it("should fail for non Strings", () => {
    expect(() => convertHexToRgb([9,9,9,9,9,9])).toThrow(invalidHexErr);
    expect(() => convertHexToRgb({})).toThrow(invalidHexErr);
    expect(() => convertHexToRgb(111111)).toThrow(invalidHexErr);
  });

  it("should fail for invalid hex values", () => {
    expect(() => convertHexToRgb("z&0000")).toThrow(invalidHexErr);
    expect(() => convertHexToRgb("zz1000")).toThrow(invalidHexErr);
    expect(() => convertHexToRgb("**@#$%")).toThrow(invalidHexErr);
  });

  it("should fail for length !3 && !6 invalid hex values", () => {
    expect(() => convertHexToRgb("4444")).toThrow(invalidHexErr);
    expect(() => convertHexToRgb("bb")).toThrow(invalidHexErr);
    expect(() => convertHexToRgb("3333ffff")).toThrow(invalidHexErr);
  });

  it("should pass for valid hex values", () => {
    expect(convertHexToRgb("ff0000")).toEqual([255,0,0]);
    expect(convertHexToRgb("000000")).toEqual([0,0,0]);
    expect(convertHexToRgb("eeeeee")).toEqual([238,238,238]);
    expect(convertHexToRgb("ffffff")).toEqual([255,255,255]);
    expect(convertHexToRgb("44bb77")).toEqual([68,187,119]);
    expect(convertHexToRgb("abcabc")).toEqual([171,202,188]);
    expect(convertHexToRgb("123456")).toEqual([18,52,86]);
    expect(convertHexToRgb("789def")).toEqual([120,157,239]);
  });

  it("should pass for length 3 valid hex values", () => {
    expect(convertHexToRgb("fff")).toEqual([255,255,255]);
    expect(convertHexToRgb("000")).toEqual([0,0,0]);
    expect(convertHexToRgb("a7e")).toEqual([170, 119, 238]);
  });
});
