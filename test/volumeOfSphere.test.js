const { volumeOfSphere } = require("../lib");

describe("volumeOfSphere", () => {
  test("volume Of Sphere(6)", () => {
    expect(volumeOfSphere(6)).toBeCloseTo(904.7786842, 4);
  });

  test("volume Of Sphere(2.2)", () => {
    expect(volumeOfSphere(2.2)).toBeCloseTo(44.6022381, 4);
  });

  test("Throw error on invalid type", () => {
    expect(() => volumeOfSphere("one")).toThrow("Invalid Type");
    expect(() => volumeOfSphere([3])).toThrow("Invalid Type");
    expect(() => volumeOfSphere(null)).toThrow("Invalid Type");
    expect(() => volumeOfSphere(undefined)).toThrow("Invalid Type");
  });

  test("Throw error on invalid value", () => {
    expect(() => volumeOfSphere(-1)).toThrow("Invalid Value");
    expect(() => volumeOfSphere(-1.4)).toThrow("Invalid Value");
  });
});
