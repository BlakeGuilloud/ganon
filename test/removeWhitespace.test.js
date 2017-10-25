const { removeWhitespace } = require("../lib");

describe("removeWhitespace", () => {
  it("Should return trimmed strings", () => {
    expect(removeWhitespace(" a b c").toBe("abc"));
    expect(removeWhitespace("bc ").toBe("bc"));
    expect(removeWhitespace("Hacktoberfest !").toBe("Hacktoberfest"));
  });

  it("Should check if parameter is valid", () => {
    expect(() => removeWhitespace({})).toThrow("Invalid Argument");
    expect(() => removeWhitespace([1,2])).toThrow("Invalid Argument");
    expect(() => removeWhitespace(null)).toThrow("Invalid Argument");
  });
});
