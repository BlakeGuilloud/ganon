const { convertBinaryToHex } = require("../lib");

describe("convertBinaryToHex", () => {

  test("(1)2 = (1)16", () => {
    expect(convertBinaryToHex(1)).toBe(1);
  });

  test("(1100110011)2 = (333)16", () => {
    expect(convertBinaryToHex(1100110011)).toBe(333);
  });

  test("(1010101010101010)2 = (AAAA)16", () => {
    expect(convertBinaryToHex(1010101010101010)).toBe("AAAA");
  });

  test("(1101111011011110)2 = (DEDE)16", () => {
    expect(convertBinaryToHex(1101111011011110)).toBe("DEDE");
  });

  test("Throw error on invalid type", () => {
    expect(() => convertBinaryToHex("DEDE")).toThrow("Invalid Type");
    expect(() => convertBinaryToHex(null)).toThrow("Invalid Type");
    expect(() => convertBinaryToHex(undefined)).toThrow("Invalid Type");
    expect(() => convertBinaryToHex("")).toThrow("Invalid Type");
  });
});
