const { previousPrime } = require("../lib");

describe("previousPrime", () => {
  test("should work for small prime numbers", () => {
    expect(previousPrime(3)).toBe(2);
    expect(previousPrime(7)).toBe(5);
  });

  test("should work for large prime numbers", () => {
    expect(previousPrime(10000)).toBe(9973);
    expect(previousPrime(77417)).toBe(77383);
    expect(previousPrime(85082)).toBe(85081);
    expect(previousPrime(100000)).toBe(99991);
  });

  test("should throw on invalid inputs", () => {
    expect(() => previousPrime("string")).toThrow();
    expect(() => previousPrime(NaN)).toThrow();
  });

  test("should throw on edge cases", () => {
    expect(() => previousPrime(-1)).toThrow();
    expect(() => previousPrime(2)).toThrow();
  });
});
