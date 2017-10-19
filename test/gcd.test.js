const {
  gcd
} = require("../lib");

test("Basic: gcd of 54 and 24 is 6", () => {
  expect(gcd(54, 24)).toBe(6);
});

test("Large Numbers: gcd of 123456 and 9876 is 12", () => {
  expect(gcd(123456, 9876)).toBe(12);
});

test("1 Negative: gcd of 54 and -24 is 6", () => {
  expect(gcd(54, -24)).toBe(6);
});

test("2 Negative: gcd of -54 and -24 is 6", () => {
  expect(gcd(-54, -24)).toBe(6);
});

test("gcd of 0 and 1 should throw error", () => {
  expect(() => {
    gcd(0, 1);
  }).toThrow();
});