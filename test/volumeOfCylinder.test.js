const { volumeOfCylinder } = require("../lib");

describe("volumeOfCylinder", () => {

  test("Should return the area of the cylinder", () => {
    expect(volumeOfCylinder(5, 10)).toBeCloseTo(785);
  });

  test("Should throw an error if called with incorrect params", () => {
    expect(() => volumeOfCylinder()).toThrow();
    expect(() => volumeOfCylinder(1, "2")).toThrow();
    expect(() => volumeOfCylinder(1, [2])).toThrow();
    expect(() => volumeOfCylinder(1, undefined)).toThrow();
    expect(() => volumeOfCylinder(1, null)).toThrow();
    expect(() => volumeOfCylinder(1, -1)).toThrow();
  });
});