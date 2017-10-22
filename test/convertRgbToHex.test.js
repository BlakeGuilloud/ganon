const { convertRgbToHex } = require("../lib");
const nonRgbErr = "rgb is not a valid rgb color";

describe("convertRgbToHex", () => {
  it("should fail for non length 3 Arrays", () => {
    expect(() => convertRgbToHex([9,9,9,9,9,9])).toThrow(nonRgbErr);
    expect(() => convertRgbToHex([8, 255])).toThrow(nonRgbErr);
    expect(() => convertRgbToHex({})).toThrow(nonRgbErr);
    expect(() => convertRgbToHex(111111)).toThrow(nonRgbErr);
  });

  it("should fail for invalid rgb values", () => {
    expect(() => convertRgbToHex([5000, -4, 3])).toThrow(nonRgbErr);
    expect(() => convertRgbToHex([256, 256, 256])).toThrow(nonRgbErr);
    expect(() => convertRgbToHex([-1, -1, -1])).toThrow(nonRgbErr);
  });

  it("should pass for valid rgb values", () => {
    expect(convertRgbToHex([255,0,0])).toEqual("ff0000");
    expect(convertRgbToHex([0,0,0])).toEqual("000000");
    expect(convertRgbToHex([238,238,238])).toEqual("eeeeee");
    expect(convertRgbToHex([255,255,255])).toEqual("ffffff");
    expect(convertRgbToHex([68,187,119])).toEqual("44bb77");
    expect(convertRgbToHex([171,202,188])).toEqual("abcabc");
    expect(convertRgbToHex([18,52,86])).toEqual("123456");
    expect(convertRgbToHex([120,157,239])).toEqual("789def");
  });
});
