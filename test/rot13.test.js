const { rot13 } = require("../lib");

describe("rot13", () => {
  test("rot13", () => {
    expect(rot13("Hello")).toBe("Uryyb");
  });

  test("rot13 lowercase", () => {
    expect(rot13("abcdefghijklmnopqrstuvwxyz")).toBe("nopqrstuvwxyzabcdefghijklm");
  });

  test("rot13 uppercase", () => {
    expect(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("NOPQRSTUVWXYZABCDEFGHIJKLM");
  });
});
