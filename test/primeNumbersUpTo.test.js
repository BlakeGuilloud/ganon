const { primeNumbersUpTo } = require("../lib");

describe("primeNumbersUpTo", () => {
  test("Prime numbers <= 60", () => {
    expect(primeNumbersUpTo(60)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]);
  });

  test("Prime numbers <= 30", () => {
    expect(primeNumbersUpTo(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  test("Prime numbers <= 37", () => {
    expect(primeNumbersUpTo(37)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
  });

  test("Throw error on invalid type", () => {
    expect(() => primeNumbersUpTo("This is not a number!")).toThrow("Invalid type");
    expect(() => primeNumbersUpTo("30")).toThrow("Invalid type");
    expect(() => primeNumbersUpTo([3])).toThrow("Invalid type");
    expect(() => primeNumbersUpTo(null)).toThrow("Invalid type");
    expect(() => primeNumbersUpTo(undefined)).toThrow("Invalid type");
  });

  test("Throw error on invalid value", () => {
    expect(() => primeNumbersUpTo(-1)).toThrow("Invalid value");
    expect(() => primeNumbersUpTo(1)).toThrow("Invalid value");
  });
});