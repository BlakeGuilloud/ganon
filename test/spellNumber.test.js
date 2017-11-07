const { spellNumber } = require("../lib");

describe("spellNumber", () => {
  test("valid number should return", () => {
    expect(spellNumber(0)).toEqual("zero");
    expect(spellNumber(123)).toEqual("one hundred twenty three");
    expect(spellNumber(1023)).toEqual("one thousand twenty three");
    expect(spellNumber(1230000)).toEqual("one million two hundred thirty thousand");
    expect(spellNumber(1230100)).toEqual("one million two hundred thirty thousand one hundred");
    expect(spellNumber(1230001)).toEqual("one million two hundred thirty thousand one");
  });

  test("valid decimal number upto .5 should be rounded down", () => {
    expect(spellNumber(123.499999999999)).toEqual("one hundred twenty three");
  });

  test("valid decimal number above or equal .5 precision should be rounded up", () => {
    expect(spellNumber(123.5)).toEqual("one hundred twenty four");
    expect(spellNumber(123.51)).toEqual("one hundred twenty four");
  });

  test("valid string should throw an error", () => {
    expect(() => spellNumber("200")).toThrow("invalid number");
  });

  test("empty string should throw an error", () => {
    expect(() => spellNumber("")).toThrow("invalid number");
  });

  test("empty object should throw an error", () => {
    expect(() => spellNumber({})).toThrow("invalid number");
  });

  test("empty array should throw an error", () => {
    expect(() => spellNumber([])).toThrow("invalid number");
  });

  test("valid object should throw an error", () => {
    expect(() => spellNumber({"one":1})).toThrow("invalid number");
  });

  test("valid array should throw an error", () => {
    expect(() => spellNumber([1,2])).toThrow("invalid number");
  });

});
