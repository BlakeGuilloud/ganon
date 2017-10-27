const { convertBytesToBits } = require("../lib");

describe("convertBytesToBits", () => {
  test("1 byte is 8 bits", () => {
    expect(convertBytesToBits(0.125)).toBe(1);
    expect(convertBytesToBits(1)).toBe(8);
    expect(convertBytesToBits(128)).toBe(1024);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertBytesToBits(null)).toThrow();
    expect(() => convertBytesToBits(true)).toThrow();
    expect(() => convertBytesToBits(undefined)).toThrow();
    expect(() => convertBytesToBits("1")).toThrow();
  });
});
