const { convertCentimetersToInches } = require("../lib");

describe("convertCentimetersToInches", () => {
  test("12 cm is 4.72 inches", () => {
    expect(convertCentimetersToInches(12)).toBe(4.72);
  });

  test("30 cm is 11.81 inches", () => {
    expect(convertCentimetersToInches(30)).toBe(11.81);
  });

  test("Throw error on invalid type", () => {
    expect(() => convertCentimetersToInches("a cm")).toThrow("Invalid Type");
    expect(() => convertCentimetersToInches(null)).toThrow("Invalid Type");
    expect(() => convertCentimetersToInches(undefined)).toThrow("Invalid Type");
    expect(() => convertCentimetersToInches({})).toThrow("Invalid Type");
  });
});
