const { countUpperCase } = require("../lib");

describe("countUpperCase", () => {
  test("counting empty string should be 0", () => {
    expect(countUpperCase("")).toBe(0);
  });

  test("counting all uppercaps string 'ABCDE' should be 5", () => {
    expect(countUpperCase("ABCDE")).toBe(5);
  });

  test("counting uppercaps in a string 'aAb2BcCdD' should be 4", () => {
    expect(countUpperCase("aAb2BcCdD")).toBe(4);
  });
});
