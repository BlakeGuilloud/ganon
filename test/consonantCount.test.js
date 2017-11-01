const { consonantCount } = require("../lib");

describe("consonantCount", () => {
  test("returns the number of consonants in the string", () => {
    expect(consonantCount("aeiou")).toBe(0);
    expect(consonantCount("rainbow")).toBe(4);
    expect(consonantCount("two words")).toBe(6);
  });

  test("returns 0 for an empty string", () => {
    expect(consonantCount("")).toBe(0);
  });
});
