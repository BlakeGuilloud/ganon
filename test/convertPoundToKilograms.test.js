const { convertPoundtoKilograms } = require("../lib");

describe("convertPoundtoKilograms", () => {
  test("10 pounds is 4.54 kgs",() => {
    expect(convertPoundtoKilograms(10)).toBe(4.54);
  });
  test("15 pounds is 6.80 kgs",() => {
    expect(convertPoundtoKilograms(15)).toBe(6.80);
  });
  test("25 pounds is 11.3 kgs",() => {
    expect(convertPoundtoKilograms(25)).toBe(11.3);
  });
  test("Throw error on invalid type",() => {
    expect(() => convertPoundtoKilograms("ten Pounds")).toThrow("invalid type");
    expect(() => convertPoundtoKilograms(null)).toThrow("invalid type");
    expect(() => convertPoundtoKilograms(undefined)).toThrow("invalid type");
    expect(() => convertPoundtoKilograms({})).toThrow("invalid type");
    expect(() => convertPoundtoKilograms(NaN)).toThrow("invalid type");
    expect(() => convertPoundtoKilograms(-5)).toThrow("invalid type");
  });
});