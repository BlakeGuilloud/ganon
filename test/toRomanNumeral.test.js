const { toRomanNumeral } = require("../lib");

describe("toRomanNumeral", () => {
  test("valid number should return", () => {
    expect(toRomanNumeral(0)).toEqual("");
    expect(toRomanNumeral(123)).toEqual("CXXIII");
    expect(toRomanNumeral(1023)).toEqual("MXXII");
    expect(toRomanNumeral(2222)).toEqual("MMCCXXII");
    expect(toRomanNumeral(48)).toEqual("XLVIII");
    expect(toRomanNumeral(49)).toEqual("XLIX");
  });

  test("valid decimal number upto .5 should be rounded down", () => {
    expect(toRomanNumeral(123.499999999999)).toEqual("CXXIII");
  });

  test("valid decimal number above or equal .5 precision should be rounded up", () => {
    expect(toRomanNumeral(123.5)).toEqual("CXXIV");
    expect(toRomanNumeral(123.51)).toEqual("CXXIV");
  });

  test("valid string should throw an error", () => {
    expect(() => toRomanNumeral("200")).toThrow("invalid number");
  });

  test("empty string should throw an error", () => {
    expect(() => toRomanNumeral("")).toThrow("invalid number");
  });

  test("empty object should throw an error", () => {
    expect(() => toRomanNumeral({})).toThrow("invalid number");
  });

  test("empty array should throw an error", () => {
    expect(() => toRomanNumeral([])).toThrow("invalid number");
  });

  test("valid object should throw an error", () => {
    expect(() => toRomanNumeral({"one":1})).toThrow("invalid number");
  });

  test("valid array should throw an error", () => {
    expect(() => toRomanNumeral([1,2])).toThrow("invalid number");
  });

  test("throw error on invalid value", () => {
    // 5000 as limit
    expect(() => toRomanNumeral(5000)).toThrow("invalid value");
  });

});
