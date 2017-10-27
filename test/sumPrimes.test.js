const { sumPrimes } = require("../lib");

describe("sumPrimes", () => {

  test("The sum of primes less than or equal to 2", () => {
    expect(sumPrimes(2)).toBeCloseTo(2);
  });

  test("The sum of primes less than or equal to 10", () => {
    expect(sumPrimes(10)).toBeCloseTo(17);
  });

  test("The sum of primes less than or equal to 99", () => {
    expect(sumPrimes(99)).toBeCloseTo(1060);
  });

  test("The sum of primes less than or equal to 977", () => {
    expect(sumPrimes(977)).toBeCloseTo(73156);
  });

  test("The sum of primes less than or equal to 500", () => {
    expect(sumPrimes(500)).toBeCloseTo(21536);
  });

});
