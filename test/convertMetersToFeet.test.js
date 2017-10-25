const { convertMetersToFeet } = require("../lib");

describe("convertMetersToFeet", () => {
  test("Converts 1 meters to feet", () => {
    expect(convertMetersToFeet(1)).toBeCloseTo(3.280);
  });

  test("Converts 5244 meters to feets", () => {
    expect(convertMetersToFeet(5244)).toBeCloseTo(17204.72);
  });

  test("Converts 0 meters to feet", () => {
    expect(convertMetersToFeet(0)).toBe(0);
  });

  test("Converts 27.432 meters to feet", () => {
    expect(convertMetersToFeet(27.432)).toBeCloseTo(90);
  });
});