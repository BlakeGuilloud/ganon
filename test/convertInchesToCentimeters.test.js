const { convertInchesToCentimeters } = require("../lib");

describe("convertInchesToCentimeters", () => {
  test("5 inches is 12.7000254000508 cm", () => {
    expect(convertInchesToCentimeters(5)).toBe(12.7000254000508);
  });

  test("7 inches is 17.78003556007112 cm", () => {
    expect(convertInchesToCentimeters(7)).toBe(12.78003556007112);
  });

  test("Throw error on invalid type", () => {
    expect(() => convertInchesToCentimeters("a inch")).toThrow("Invalid Type");
    expect(() => convertInchesToCentimeters(null)).toThrow("Invalid Type");
    expect(() => convertInchesToCentimeters(undefined)).toThrow("Invalid Type");
    expect(() => convertInchesToCentimeters({})).toThrow("Invalid Type");
  });
});
