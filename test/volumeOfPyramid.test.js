const { volumeOfPyramid } = require("../lib");

describe("volumeOfPyramid", () => {
  test("volume Of Pyramid(6)", () => {
    expect(volumeOfPyramid(6, 3, 5)).toBe(30);
  });

  test("volume Of Pyramid(2.2)", () => {
    expect(volumeOfPyramid(2.2, 3.4, 16.23)).toBeCloseTo(40.47, 2);
  });

  test("Throw error on invalid type", () => {
    expect(() => volumeOfPyramid("one", "two", "three")).toThrow("Invalid Type");
    expect(() => volumeOfPyramid([1, 2, 3])).toThrow("Invalid Type");
    expect(() => volumeOfPyramid(null)).toThrow("Invalid Type");
    expect(() => volumeOfPyramid(undefined)).toThrow("Invalid Type");
  });

  test("Throw error on invalid value", () => {
    expect(() => volumeOfPyramid(-1, -2, -3)).toThrow("Invalid Value");
    expect(() => volumeOfPyramid(-1.4, -1.3, 1.2)).toThrow("Invalid Value");
    expect(() => volumeOfPyramid(-1.4, 1.3, -1.2)).toThrow("Invalid Value");
    expect(() => volumeOfPyramid(1.4, -1.3, 1.2)).toThrow("Invalid Value");

  });
});
