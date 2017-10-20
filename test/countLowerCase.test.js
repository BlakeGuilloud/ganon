const { countLowerCase } = require("../lib");

describe("countLowerCase", () => {
  test("counting empty string should be 0", () => {
    expect(countLowerCase("")).toBe(0);
  });

  test("counting all lowercase string 'abcde' should be 5", () => {
    expect(countLowerCase("abcde")).toBe(5);
  });

  test("counting lowercase in a string 'aAb2BcCdD' should be 4", () => {
    expect(countLowerCase("aAb2BcCdD")).toBe(4);
  });
});
