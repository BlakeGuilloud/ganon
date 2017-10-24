const { convertFeetToMeters } = require("../lib");

describe("convertFeetToMeters", () => {
  test("Converts 70 feet to meters", () => {
    expect(convertFeetToMeters(70)).toBeCloseTo(21.336);
  });

  test("Converts 17575 feet to meters", () => {
    expect(convertFeetToMeters(17575)).toBeCloseTo(5356.86);
  });

  test("Converts 0 feet to meters", () => {
    expect(convertFeetToMeters(0)).toBe(0);
  });

  test("Converts 12 feet to meters", () => {
    expect(convertFeetToMeters(12)).toBeCloseTo(3.6576);
  });
});