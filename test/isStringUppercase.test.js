const { isStringUppercase } = require("../lib");

describe("isStringUppercase", () => {
  test("isStringUppercase returns false for single char 'c'", () => {
    expect(isStringUppercase("c")).toBe(false);
  });

  test("isStringUppercase returns true for single char 'c'", () => {
    expect(isStringUppercase("C")).toBe(true);
  });

  test("isStringUppercase returns false for 'hello I AM VLADIMIR'", () => {
    expect(isStringUppercase("hello I AM VLADIMIR")).toBe(false);
  });

  test("isStringUppercase returns false for 'HELLO I AM VLADIMIR'", () => {
    expect(isStringUppercase("HELLO I AM VLADIMIR")).toBe(true);
  });

  test("isStringUppercase returns false for 'ACSKLDFJSgSKLDFJSKLDFJ'", () => {
    expect(isStringUppercase("ACSKLDFJSgSKLDFJSKLDFJ")).toBe(false);
  });
});