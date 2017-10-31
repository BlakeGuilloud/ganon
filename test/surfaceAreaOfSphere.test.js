const { surfaceAreaOfSphere } = require("../lib");

describe("surfaceAreaOfSphere", () => {
  test("surface area of sphere with radius 7 is 615.7521601035994", () => {
    expect(surfaceAreaOfSphere(7)).toBeCloseTo(615.7521601035994, 4);
  });

  test("surface area of sphere with radius 101 is 128189.54663707792", () => {
    expect(surfaceAreaOfSphere(101)).toBeCloseTo(128189.54663707792, 4);
  });

  test("surface area of sphere with radius 0.666 is 5.573889084222698", () => {
    expect(surfaceAreaOfSphere(0.666)).toBeCloseTo(5.573889084222698, 4);
  });

  test("surface area of sphere with radius 0 is 0.000000", () => {
    expect(surfaceAreaOfSphere(0)).toBeCloseTo(0.000000, 4);
  });

  test("should throw exception if input radius is less than 0", () => {
    expect(() => surfaceAreaOfSphere(-5))
      .toThrow("Length of the radius must be positive!");
  });

});
