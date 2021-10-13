const { volumeOfFrustum } = require("../lib");

describe("volumeOfFrustum", () => {

  test("Should return the volume of frustum of cone", () => {
    expect(volumeOfFrustum(5, 10, 10)).toBeCloseTo(1832.595);
  });

  test("Should throw an error if called with incorrect params", () => {
    expect(() => volumeOfFrustum()).toThrow();
    expect(() => volumeOfFrustum(1, "2")).toThrow();
    expect(() => volumeOfFrustum(1, [2])).toThrow();
    expect(() => volumeOfFrustum(1, undefined, 45)).toThrow();
    expect(() => volumeOfFrustum(1, null, 10)).toThrow();
    expect(() => volumeOfFrustum(1, -1, 1)).toThrow();
    expect(() => volumeOfFrustum(1, 1, -1)).toThrow();
    expect(() => volumeOfFrustum(-1, 1, 1)).toThrow();
    expect(() => volumeOfFrustum(1, 2)).toThrow();
  });
});
