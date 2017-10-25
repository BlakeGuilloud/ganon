const { convertKelvinToRankine } = require("../lib");

describe("convertKelvinToRankine", () => {
  test("0 Kelvin is 0 Rankine", () => {
    expect(convertKelvinToRankine(0)).toBe(0);
  });

  test("1 Kelvin is 1.8 Rankine", () => {
    expect(convertKelvinToRankine(1)).toBe(1.8);
  });

  test("25 Kelvin is 45 Rankine", () => {
    expect(convertKelvinToRankine(25)).toBe(45);
  });

  test("Throw error on invalid type", () => {
    expect(() => convertKelvinToRankine("one Rankine")).toThrow("Invalid Type");
    expect(() => convertKelvinToRankine(null)).toThrow("Invalid Type");
    expect(() => convertKelvinToRankine(undefined)).toThrow("Invalid Type");
    expect(() => convertKelvinToRankine({})).toThrow("Invalid Type");
    expect(() => convertKelvinToRankine(NaN)).toThrow("Invalid Type");
  });
});
