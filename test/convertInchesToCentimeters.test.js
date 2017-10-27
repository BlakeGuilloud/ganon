const { convertInchesToCentimeters } = require("../lib");

describe("convertInchesToCentimeters", () => {
  test("5 inches is 12.70 cm", () => {
    expect(convertInchesToCentimeters(5)).toBe(12.7);
  });

  test("7 inches is 17.78 cm", () => {
    expect(convertInchesToCentimeters(7)).toBe(17.78);
  });

  test("12 inches is 30.48 cm", () => {
    expect(convertInchesToCentimeters(12)).toBe(30.48);
  });

  test("Throw error on invalid type", () => {
    expect(() => convertInchesToCentimeters("a inch")).toThrow("Invalid Type");
    expect(() => convertInchesToCentimeters(null)).toThrow("Invalid Type");
    expect(() => convertInchesToCentimeters(undefined)).toThrow("Invalid Type");
    expect(() => convertInchesToCentimeters({})).toThrow("Invalid Type");
  });
});
