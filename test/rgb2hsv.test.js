const { rgb2hsv } = require("../lib");

describe("rgb2hsv", () => {
  it("should correctly convert valid rgb values to hsv", () => {
    expect(rgb2hsv([150, 50, 50])).toEqual([0, .667, .588]);
    expect(rgb2hsv([160, 110, 250])).toEqual([261, .56, .98]);
    expect(rgb2hsv([45, 202, 17])).toEqual([111, .916, .792]);
    expect(rgb2hsv([149, 147, 144])).toEqual([36, .034, .584]);
    expect(rgb2hsv([255, 255, 255])).toEqual([0, 0, 1]);
    expect(rgb2hsv([0, 0, 0])).toEqual([0, 0, 0]);
  });
});
