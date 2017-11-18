const { isPrime } = require("../lib");

describe("isPrime", () => {
  test("7 is prime", () => {
    expect(isPrime(7)).toBe(true);
  });

  test("1 is not prime", () => {
    expect(isPrime(1)).toBe(false);
  });

  test("49 is not prime", () => {
    expect(isPrime(49)).toBe(false);
  });

  test("95279 is prime", () => {
    expect(isPrime(95279)).toBe(true);
  });

  test("2 is prime", () => {
    expect(isPrime(2)).toBe(true);
  });

  test("0 is not prime", () => {
    expect(isPrime(0)).toBe(false);
  });

  test("should throw on invalid inputs", () => {
    expect(() => isPrime("string")).toThrow();
    expect(() => isPrime(NaN)).toThrow();
  });
});
