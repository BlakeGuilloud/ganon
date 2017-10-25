const { trimWhitespaces } = require("../lib");

describe("trimWhitespaces", () => {
  it("Should return trimmed strings", () => {
    expect(trimWhitespaces(" a b c").toBe("abc"));
    expect(trimWhitespaces("bc ").toBe("bc"));
    expect(trimWhitespaces("Hacktoberfest !").toBe("Hacktoberfest"));
  });

  it("Should check if parameter is valid", () => {
    expect(() => trimWhitespaces({})).toThrow("Invalid Argument");
    expect(() => trimWhitespaces([1,2])).toThrow("Invalid Argument");
    expect(() => trimWhitespaces(null)).toThrow("Invalid Argument");
  });
});
