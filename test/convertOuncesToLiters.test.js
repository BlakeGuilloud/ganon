const { convertOuncesToLiters } = require("../lib");

describe("convertOuncesToLiters", () => {
  test("returns the number of liters from ounces", () => {
    expect(convertOuncesToLiters(1)).toBe(0.0295735);
    expect(convertOuncesToLiters(10.5)).toBe(0.3105221);
    expect(convertOuncesToLiters(32)).toBe(0.946353);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertOuncesToLiters(null)).toThrow();
    expect(() => convertOuncesToLiters(true)).toThrow();
    expect(() => convertOuncesToLiters(false)).toThrow();
    expect(() => convertOuncesToLiters(undefined)).toThrow();
    expect(() => convertOuncesToLiters([])).toThrow();
  });

  test("throw error when the input is negative", () => {
    expect(() => convertOuncesToLiters(-1)).toThrow();
  });
});
