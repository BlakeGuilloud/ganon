const { isLeapYear } = require("../lib");

describe("isLeapYear", () => {
  test("2012 is a leap year", () => {
    expect(isLeapYear(2012)).toBe(true);
  });

  test("2014 is NOT a leap year", () => {
    expect(isLeapYear(2014)).toBe(false);
  });

  test("0 is NOT a leap year", () => {
    expect(isLeapYear(0)).toBe(false);
  });

  test("Throw error on invalid type", () => {
    expect(() => isLeapYear("twenty twelve")).toThrow("Invalid Type");
    expect(() => isLeapYear(null)).toThrow("Invalid Type");
    expect(() => isLeapYear(undefined)).toThrow("Invalid Type");
    expect(() => isLeapYear({})).toThrow("Invalid Type");
  });
});
