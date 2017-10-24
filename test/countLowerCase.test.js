const { countLowerCase } = require("../lib");

describe("countLowerCase", () => {
  test("Empty String should be 0", () => {
    expect(countLowerCase("")).toBe(0);
  });

  test("String 'abcde' should be 5", () => {
    expect(countLowerCase("abcde")).toBe(5);
  });

  test("String 'aAb2BcCdD' should be 4", () => {
    expect(countLowerCase("aAb2BcCdD")).toBe(4);
  });
});
