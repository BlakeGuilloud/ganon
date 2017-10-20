const { convertStringToBinary } = require("../lib");
const SUCCESFULL_BINARY_STRING = "01010100 01101000 01101001 01110011 " +
"00100000 01101001 01110011 00100000 01100001 00100000 01110100 01100101 01110011 01110100 ";

describe("Convert string to binary", () => {
  test("The text 'This is a test' should be a binary string chain", () => {
    expect(convertStringToBinary("This is a test").toBe(SUCCESFULL_BINARY_STRING));
  });
  test("Throw error when the argument is not a string", () => {
    expect(() => convertStringToBinary(123.41)).toThrow();
  });
});