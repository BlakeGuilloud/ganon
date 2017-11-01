const { caesarDecode } = require("../lib");

describe("caesarDecode", () => {
  test("returns an empty string when message is empty", () => {
    expect(caesarDecode("")).toEqual("");
  });

  test("returns same string which contains no letters", () => {
    expect(caesarDecode("1234567890")).toEqual("1234567890");
    expect(caesarDecode("!$#@^&*()")).toEqual("!$#@^&*()");
  });

  test("decrypts the letters and leaves spacing and other characters unchanged", () => {
    expect(caesarDecode("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toEqual("XYZABCDEFGHIJKLMNOPQRSTUVW");
    expect(caesarDecode("Oruhp lsvxp groru vlw dphw, frqvhfwhwxu dglslvflqj holw!")).toEqual("Lorem ipsum dolor sit amet, consectetur adipiscing elit!");
  });

  test("lower case decrypts to lower case and uppercase decrypts to uppercase", () => {
    expect(caesarDecode("Vhg xw Shuvslfldwlv xqgh rpqlv lvwh Qdwxv HUURU vlw 1984.")).toEqual("Sed ut Perspiciatis unde omnis iste Natus ERROR sit 1984.");
  });

  test("combining letters, spacing or other characters, and uppercase", () => {
    expect(caesarDecode("U4qG0p whaw k3uH!")).toEqual("R4nD0m text h3rE!");
  });
});
