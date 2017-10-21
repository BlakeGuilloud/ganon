const { toFixed } = require("../lib");

describe("toFixed", () => {
  test("rounding, no fractional part", () => {
    expect(toFixed(12345.6789)).toBe("12346");
  });

  test("rounding", () => {
    expect(toFixed(12345.6789, 1)).toBe("12345.7");
  });

  test("added zeros", () => {
    expect(toFixed(12345.6789, 6)).toBe("12345.678900");
  });
});
