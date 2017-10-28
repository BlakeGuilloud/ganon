const { convertMetersToInches } = require("../lib");

describe("convertMetersToInches", () => {
  test("Converts 1 meter to inches", () => {
    expect(convertMetersToInches(1)).toBeCloseTo(39.36);
  });

  test("Converts 6900 meters to inches", () => {
    expect(convertMetersToInches(6900)).toBeCloseTo(271584);
  });

  test("Converts 0 meters to inches", () => {
    expect(convertMetersToInches(0)).toBe(0);
  });

  test("Converts 10.6707 meters to inches", () => {
    expect(convertMetersToInches(10.6707)).toBeCloseTo(420);
  });
});
