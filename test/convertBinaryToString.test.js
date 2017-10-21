const { convertBinaryToString } = require("../lib");
const BINARY_STRING = "001000000100110101100001011110010010000001110100" +
"01101000011001010010000001100110011011110111001001100011011001010010000001100010" +
"01100101001000000111011101101001011101000110100000100000011110010110111101110101";
const EMPTY_STRING = "00100000";
const STRING_NUMBERS = "0011000100110010001100110011010000110101011000010111001101100100";

describe("convertBinaryToString", () => {
  it("should have a string input", () => {
    expect(convertBinaryToString()).toBeUndefined();
    expect(convertBinaryToString({})).toBeUndefined();
    expect(convertBinaryToString([])).toBeUndefined();
    expect(convertBinaryToString(true)).toBeUndefined();
    expect(convertBinaryToString(() => {})).toBeUndefined();
  });

  it("should return \" May the force be with you\"", () => {
    expect(convertBinaryToString(BINARY_STRING)).toBe(" May the force be with you");
  });

  it("should return a whitespace character", () => {
    expect(convertBinaryToString(EMPTY_STRING)).toBe(" ");
  });

  it("should return \"12345asd\"", () => {
    expect(convertBinaryToString(STRING_NUMBERS)).toBe("12345asd");
  });
});
