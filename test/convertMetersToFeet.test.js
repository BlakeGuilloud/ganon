const { convertMetersToFeet } = require("../lib");

describe("convertMetersToFeet", () => {
  test("Converts 1 meters to feet", () => {
    expect(convertMetersToFeet(1)).toBeCloseTo(3.28084);
  });

  test("Converts 1.723 meters to feet", () => {
    expect(convertMetersToFeet(1.723)).toBeCloseTo(5.65);
  });

  test("Converts 0 meters to feet", () => {
    expect(convertMetersToFeet(0)).toBe(0);
  });

  test("Converts 1782 meters to feet", () => {
    expect(convertMetersToFeet(1782)).toBeCloseTo(5846.45);
  });
});