const { nextPrime } = require("../lib");

describe("check nextPrime function", () => {
  test("small primes", () => {
    expect(nextPrime(3)).toBe(5);
    expect(nextPrime(6)).toBe(7);
    expect(nextPrime(0)).toBe(2);
  });

  test("bigger Primes", () => {
    expect(nextPrime(75437)).toBe(75479);
    expect(nextPrime(84869)).toBe(84871);
    expect(nextPrime(90523)).toBe(90527);
  });

  test("invalid inputs, edge case", () => {
    expect(() => nextPrime("ABC")).toThrow();
    expect(() => nextPrime(NaN)).toThrow();
    expect(nextPrime(-1)).toBe(2);
  });
});
