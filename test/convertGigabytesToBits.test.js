const { convertGigabytesToBits } = require("../lib");

describe("convertGigabytesToBits", () => {
  test("1 gigabyte is 8589934592 bits", () => {
    expect(convertGigabytesToBits(0)).toBe(0);
    expect(convertGigabytesToBits(1)).toBe(8589934592);
    expect(convertGigabytesToBits(128)).toBe(1099511627776);
    expect(convertGigabytesToBits(69)).toBe(592705486848);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertGigabytesToBits(null)).toThrow();
    expect(() => convertGigabytesToBits(true)).toThrow();
    expect(() => convertGigabytesToBits(undefined)).toThrow();
    expect(() => convertGigabytesToBits("1")).toThrow();
  });

  test("throw error when the argument is a negative number", () => {
    expect(() => convertGigabytesToBits(-1)).toThrow();
    expect(() => convertGigabytesToBits(-128)).toThrow();
    expect(() => convertGigabytesToBits(-69)).toThrow();
  });
});
