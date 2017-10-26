const { vigenereCipher } = require("../lib");

describe("vigenereCipher", () => {
  test("Cipher hello world with key lemon", () => {
    expect(vigenereCipher("hello world","lemon")).toEqual("sixzb hsdzq");
  });

  test("Cipher 123456 with key lemon", () => {
    expect(vigenereCipher("12345","lemon")).toEqual("12345");
  });

  test("Cipher hacktoberfest17 with key lemon", () => {
    expect(vigenereCipher("hacktoberfest17","apple")).toEqual("hprvxoqtcjehi17");
  });
});
