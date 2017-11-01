const { convertPetabytesToGigabytes } = require("../lib");

describe("convertPetabytesToGigabytes", () => {
  test("function converts Petabytes to Gigabytes", () => {
    expect(convertPetabytesToGigabytes(0)).toBe(0);
    expect(convertPetabytesToGigabytes(0.2)).toBe(200000);
    expect(convertPetabytesToGigabytes(0.5)).toBe(500000);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertPetabytesToGigabytes(null)).toThrow();
    expect(() => convertPetabytesToGigabytes(true)).toThrow();
    expect(() => convertPetabytesToGigabytes(undefined)).toThrow();
    expect(() => convertPetabytesToGigabytes("1")).toThrow();
  });
});
