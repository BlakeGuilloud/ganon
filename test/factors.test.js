const { factors } = require("../lib");

describe("factors", () => {
  test("Factors of a prime number", () => {
    expect(factors(7)).toEqual([7]);
  });

  test("Factors of a composite number", () => {
    expect(factors(84)).toEqual([2, 3, 7]);
  });

  test("Throw invalid type", () => {

    // input should be positive integer
    expect(() => factors(-1)).toThrow();

    expect(() => factors(0)).toThrow();
  });
});