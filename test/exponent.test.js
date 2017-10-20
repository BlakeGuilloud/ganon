const { exponent } = require("../lib");

describe("exponent", () => {
  test("number 5 to the power of 2 equals 25", () => {
    expect(exponent(5, 2)).toBe(25);
  });

  test("number 2 to the power of 3 equals 8", () => {
    expect(exponent(2, 3)).toBe(8);
  });
});
