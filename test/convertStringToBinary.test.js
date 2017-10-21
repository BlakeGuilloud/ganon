const { convertStringToBinary } = require("../lib");
const SUCCESSFUL_BINARY_STRING = "00100000 01001101 01100001 01111001 00100000 01110100 " +
"01101000 01100101 00100000 01100110 01101111 01110010 01100011 01100101 00100000 01100010 " +
"01100101 00100000 01110111 01101001 01110100 01101000 00100000 01111001 01101111 01110101";
const SUCCESSFUL_EMPTY_STRING = "00100000";
const SUCCESSFUL_STRING_NUMBERS = "00110001 00110010 00110011 00110100 00110101 01100001 01110011 01100100";

describe("Convert string to binary", () => {
  test("Any given text should be a binary string chain", () => {
    expect(convertStringToBinary("May the force be with you").toBe(SUCCESSFUL_BINARY_STRING));
    expect(convertStringToBinary(" ").toBe(SUCCESSFUL_EMPTY_STRING));
    expect(convertStringToBinary("12345asd").toBe(SUCCESSFUL_STRING_NUMBERS));
  });
  test("Throw error when the text is not a string", () => {
    expect(() => convertStringToBinary(123.41)).toThrow();
    expect(() => convertStringToBinary(true)).toThrow();
    expect(() => convertStringToBinary(undefined)).toThrow();
    expect(() => convertStringToBinary(null)).toThrow();
  });
});