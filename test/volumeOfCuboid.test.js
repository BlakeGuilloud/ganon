const { volumeOfCuboid } = require("../lib");

describe("volumeOfCuboid", () => {
  test("Volume of cuboid(2, 3, 4)", () => {
    expect(volumeOfCuboid(2, 3, 4)).toBe(24);
  });

  test("Volume of cuboid(1.2, 2.4, 3.6)", () => {
    expect(volumeOfCuboid(1.2, 2.4, 3.6)).toBeCloseTo(10.368);
  });

  test("Throw error on invalid type", () => {
    expect(() => volumeOfCuboid(1, 2, "one")).toThrow("Invalid Type");
    expect(() => volumeOfCuboid(1, 2, [3])).toThrow("Invalid Type");
    expect(() => volumeOfCuboid(1, 2, null)).toThrow("Invalid Type");
    expect(() => volumeOfCuboid(1, 2, undefined)).toThrow("Invalid Type");
  });
});
