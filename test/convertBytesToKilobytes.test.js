const { convertBytesToKilobytes } = require("../lib");

describe("convertBytesToKilobytes", () => {
  test("function converts bytes to kilo bytes correctly", () => {
    expect(convertBytesToKilobytes(100)).toBe(0.1);
    expect(convertBytesToKilobytes(15)).toBe(0.015);
    expect(convertBytesToKilobytes(500)).toBe(0.5);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertBytesToKilobytes(null)).toThrow();
    expect(() => convertBytesToKilobytes(true)).toThrow();
    expect(() => convertBytesToKilobytes(false)).toThrow();
    expect(() => convertBytesToKilobytes(undefined)).toThrow();
    expect(() => convertBytesToKilobytes("1")).toThrow();
    expect(() => convertBytesToKilobytes([])).toThrow();
  });

  test("throw error when the input is negative", () => {
    expect(() => convertBytesToKilobytes(-1)).toThrow();
  });
});
