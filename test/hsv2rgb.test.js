const {hsv2rgb} = require("../lib");

describe("hsv2rgb", () => {
  it("should correctly convert valid hsv values to rgb", () => {
    expect(hsv2rgb([0, 0, 1])).toEqual([255, 255, 255]);
    expect(hsv2rgb([120, 1, 1])).toEqual([0, 255, 0]);
    expect(hsv2rgb([300, 1, 0.5])).toEqual([128, 0, 128]);
    expect(hsv2rgb([0, 0, 0])).toEqual([0, 0, 0]);
    expect(hsv2rgb([69, 0.13, 0.37])).toEqual([93, 94, 82]);
  });
});
