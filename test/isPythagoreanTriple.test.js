const { isPythagoreanTriple } = require("../lib");

describe("isPythagoreanTriple", () => {
  test("isPythagoreanTriple returns true for 3, 4, 5", () => {
    expect(isPythagoreanTriple(3, 4, 5)).toBe(true);
  });

  test("isPythagoreanTriple returns true for 20, 21, 29", () => {
    expect(isPythagoreanTriple(20, 21, 29)).toBe(true);
  });

  test("isPythagoreanTriple returns false for 4, 12, 13", () => {
    expect(isPythagoreanTriple(4, 12, 13)).toBe(false);
  });
});
