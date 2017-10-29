const { nthPrime } = require("../lib");

describe("nthPrime", () => {
  test("return the first prime number", () => {
    expect(nthPrime(1)).toBe(2);
  });

  test("return the second prime number", () => {
    expect(nthPrime(2)).toBe(3);
  });

  test("return the fifth prime number", () => {
    expect(nthPrime(5)).toBe(11);
  });

  test("return the tenth prime number", () => {
    expect(nthPrime(10)).toBe(29);
  });
});
