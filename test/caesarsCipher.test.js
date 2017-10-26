const { caesarsCipher } = require("../lib");

describe("caesarsCipher", () => {
  test("returns an empty string when message is empty", () => {
    expect(caesarsCipher("")).toEqual("");
  });

  test("returns same string which contains no letters", () => {
    expect(caesarsCipher("1234567890")).toEqual("1234567890");
    expect(caesarsCipher("!$#@^&*()")).toEqual("!$#@^&*()");
  });

  test("encrypts the letters and leaves spacing and other characters unchanged", () => {
    expect(caesarsCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toEqual("NOPQRSTUVWXYZABCDEFGHIJKLM");
    expect(caesarsCipher("HELLO WORLD!")).toEqual("URYYB JBEYQ!");
    expect(caesarsCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG")).toEqual("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT");
  });

  test("lower case encrypts to lower case and uppercase encrypts to uppercase", () => {
    expect(caesarsCipher("The Quick Brown Fox Jumps Over The Lazy Dog")).toEqual("Gur Dhvpx Oebja Sbk Whzcf Bire Gur Ynml Qbt");
  });

  test("combining letters, spacing or other characters, and uppercase", () => {
    expect(caesarsCipher("4noth3r s3cr3t m355age LUL")).toEqual("4abgu3e f3pe3g z355ntr YHY");
  });
});
