const { volumeOfCone } = require("../lib");

describe("volumeOfCone", () => {
  test("Volume of cone(2, 3)", () => {
    expect(volumeOfCone(2, 3)).toBeCloseTo(12.57);
  });

  test("Volume of cone(1.2, 2.4)", () => {
    expect(volumeOfCone(1.2, 2.4)).toBeCloseTo(3.62);
  });

  test("Throw error on invalid type", () => {
    expect(() => volumeOfCone(1, "one")).toThrow("Invalid Type");
    expect(() => volumeOfCone(1, [3])).toThrow("Invalid Type");
    expect(() => volumeOfCone(1, null)).toThrow("Invalid Type");
    expect(() => volumeOfCone(1, undefined)).toThrow("Invalid Type");
  });

  test("Throw error on invalid value", () => {
    expect(() => volumeOfCone(1, -1)).toThrow("Invalid Value");
    expect(() => volumeOfCone(-1, 1)).toThrow("Invalid Value");
    expect(() => volumeOfCone(-1, -1)).toThrow("Invalid Value");
  });
});
