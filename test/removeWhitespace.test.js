const { removeWhitespace } = require("../lib");

describe("removeWhitespace", () => {
  it("Should return trimmed strings", () => {
    expect(() => removeWhitespace(" a b c").toBe("abc"));
    expect(() => removeWhitespace("bc ").toBe("bc"));
    expect(() => removeWhitespace("Hacktoberfest !").toBe("Hacktoberfest!"));
    expect(() => removeWhitespace("Happy   Hacking   ").toBe("HappyHacking"));
    expect(() => removeWhitespace("Nice ly  D o ne").toBe("NicelyDone"));
  });

  it("Should check if parameter is valid", () => {
    expect(() => removeWhitespace({})).toThrow("Invalid Argument");
    expect(() => removeWhitespace([1,2])).toThrow("Invalid Argument");
    expect(() => removeWhitespace(null)).toThrow("Invalid Argument");
    expect(() => removeWhitespace(false)).toThrow("Invalid Argument");
    expect(() => removeWhitespace([{}])).toThrow("Invalid Argument");
  });
});
