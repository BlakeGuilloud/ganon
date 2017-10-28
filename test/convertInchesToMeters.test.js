const { convertInchesToMeters } = require("../lib");

describe("convertInchesToMeters", () => {
  test("Converts 39.36 inches to meters", () => {
    expect(convertInchesToMeters(39.36)).toBeCloseTo(1);
  });

  test("Converts 271584 inches to meters", () => {
    expect(convertInchesToMeters(271584)).toBeCloseTo(6900);
  });

  test("Converts 0 inches to meters", () => {
    expect(convertInchesToMeters(0)).toBe(0);
  });

  test("Converts 420 inches to meters", () => {
    expect(convertInchesToMeters(420)).toBeCloseTo(10.6707);
  });
});
