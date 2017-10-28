const { spellNumber } = require("../lib");

describe("spellNumber", () => {
  test("valid number should return", () => {
    expect(spellNumber(123)).toEqual("one hundred twenty three");
  });

  test("valid decimal number upto .55 should be rounded down", () => {
    expect(spellNumber(123.54)).toEqual("one hundred twenty three");
  });

  test("valid decimal number above .55 precision should be rounded up", () => {
    expect(spellNumber(123.57)).toEqual("one hundred twenty four");
  });

  test("valid string should throw an error", () => {
    expect(spellNumber("200")).toThrowError("invalid number");
  });

  test("empty string should throw an error", () => {
    expect(spellNumber("")).toThrowError("invalid number");
  });

  test("empty object should throw an error", () => {
    expect(spellNumber({})).toThrowError("invalid number");
  });

  test("empty array should throw an error", () => {
    expect(spellNumber([])).toThrowError("invalid number");
  });

  test("valid object should throw an error", () => {
    expect(spellNumber({"one":1})).toThrowError("invalid number");
  });

  test("valid array should throw an error", () => {
    expect(spellNumber([1,2])).toThrowError("invalid number");
  });

});