const { convertBitsToBytes } = require("../lib");

describe("convertBitsToBytes", () => {
  test("1 bit is 0.125 bytes", () => {
    expect(convertBitsToBytes(1)).toBe(0.125);
    expect(convertBitsToBytes(8)).toBe(1);
    expect(convertBitsToBytes(1024)).toBe(128);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertBitsToBytes(null)).toThrow();
    expect(() => convertBitsToBytes(true)).toThrow();
    expect(() => convertBitsToBytes(undefined)).toThrow();
    expect(() => convertBitsToBytes("1")).toThrow();
  });
});