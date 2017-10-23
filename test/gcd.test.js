const { gcd } = require("../lib");

describe("gcd", () => {
  test("Basic: gcd of 54 and 24 is 6", () => {
    expect(gcd(54, 24)).toBe(6);
  });

  test("Large Numbers: gcd of 123456 and 9876 is 12", () => {
    expect(gcd(123456, 9876)).toBe(12);
  });

  test("1 Negative: gcd of -54 and 24 is 6", () => {
    expect(gcd(-54, 24)).toBe(6);
  });

  test("1 Negative: gcd of 54 and -24 is 6", () => {
    expect(gcd(54, -24)).toBe(6);
  });

  test("2 Negatives: gcd of -54 and -24 is 6", () => {
    expect(gcd(-54, -24)).toBe(6);
  });

  test("1 zero: gcd of 0 and 5 is 5", () => {
    expect(gcd(0, 5)).toBe(5);
  });

  test("1 zero: gcd of 5 and 0 is 5", () => {
    expect(gcd(5, 0)).toBe(5);
  });

  test("2 zeros: gcd of 0 and 0 is 0", () => {
    expect(gcd(0, 0)).toBe(0);
  });
});
