const { countPrimes } = require("../lib");

describe("countPrimes", () => {
  test("Number of primes between 1 and 1 is 0", () => {
    expect(countPrimes(1)).toBe(0);
  });

  test("Number of primes between 1 and 9 is 4", () => {
    expect(countPrimes(9)).toBe(4);
  });

  test("Number of primes between 1 and 25 is 9", () => {
    expect(countPrimes(25)).toBe(9);
  });

  test("Number of primes between 1 and 100 is 25", () => {
    expect(countPrimes(100)).toBe(25);
  });

  test("Number of primes between 1 and 1000 is 168", () => {
    expect(countPrimes(1000)).toBe(168);
  });
});
