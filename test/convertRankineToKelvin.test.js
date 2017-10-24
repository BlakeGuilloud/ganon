const { convertRankineToKelvin } = require("../lib");

describe("convertRankineToKelvin", () => {
  test("0 Rankine is 0 Kelvin", () => {
    expect(convertRankineToKelvin(0)).toBe(0);
  });

  test("1 Rankine is 0.555556 Kelvin", () => {
    expect(convertRankineToKelvin(1)).toBe(0.555556);
  });

  test("25 Rankine is 13.8889 Kelvin", () => {
    expect(convertRankineToKelvin(25)).toBe(13.8889);
  });

  test("Throw error on invalid type", () => {
    expect(() => convertRankineToKelvin("one Rankine")).toThrow("Invalid Type");
    expect(() => convertRankineToKelvin(null)).toThrow("Invalid Type");
    expect(() => convertRankineToKelvin(undefined)).toThrow("Invalid Type");
    expect(() => convertRankineToKelvin({})).toThrow("Invalid Type");
    expect(() => convertRankineToKelvin(-5)).toThrow("Invalid Type");
    expect(() => convertRankineToKelvin(NaN)).toThrow("Invalid Type");
  });
});
