const { convertInchesToMeters } = require("../lib");

describe("convertInchesToMeters", () => {
  test("Converts 39.36 inches to meters", () => {
    expect(convertInchesToMeters(39.36)).toBeCloseTo(1);
  });

  test("Converts 271584 inches to meters", () => {
    expect(convertInchesToMeters(271584)).toBeCloseTo(6898.2336);
  });

  test("Converts 0 inches to meters", () => {
    expect(convertInchesToMeters(0)).toBe(0);
  });

  test("Converts 420 inches to meters", () => {
    expect(convertInchesToMeters(420)).toBeCloseTo(10.6707);
  });

  test("Throws an error on invalid type", () => {
    expect(() => convertInchesToMeters("an inch")).toThrow("Input must be a number");
  });

  test("Throws an error on inches < 0", () => {
    expect(() => convertInchesToMeters(-1)).toThrow("Input must be a positive number");
  });
});