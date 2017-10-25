const {convertPoundToKilograms} = require("../lib");

describe("convertPoundtoKilograms", () => {
  test("10 pounds is 4.54 kgs", () => {
    expect(convertPoundToKilograms(10)).toBe(4.54);
  });
  test("15 pounds is 6.80 kgs", () => {
    expect(convertPoundToKilograms(15)).toBe(6.80);
  });
  test("25 pounds is 11.3 kgs", () => {
    expect(convertPoundToKilograms(25)).toBe(11.3);
  });
  test("Throw error on invalid type", () => {
    expect(() => convertPoundToKilograms("ten Pounds")).toThrow("invalid type");
    expect(() => convertPoundToKilograms(null)).toThrow("invalid type");
    expect(() => convertPoundToKilograms(undefined)).toThrow("invalid type");
    expect(() => convertPoundToKilograms({})).toThrow("invalid type");
    expect(() => convertPoundToKilograms(NaN)).toThrow("invalid type");
    expect(() => convertPoundToKilograms(-5)).toThrow("invalid type");
  });
});