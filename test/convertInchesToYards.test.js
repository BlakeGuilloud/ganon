const { convertInchesToYards } = require("../lib");

describe("convert accurately", () => {
  test("sample value", () => {
    expect(convertInchesToYards(36)).toBe(1);
    expect(convertInchesToYards(42)).toBe(1.17);
    expect(convertInchesToYards(123)).toBe(3.42);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertInchesToYards(null)).toThrow();
    expect(() => convertInchesToYards(true)).toThrow();
    expect(() => convertInchesToYards(undefined)).toThrow();
    expect(() => convertInchesToYards("1")).toThrow();
  });
});