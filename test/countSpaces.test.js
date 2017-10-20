const { countSpaces } = require("../lib");

describe("countSpaces", () => {
  test("no of spaces in an \"empty string\" is 0", () => {
    expect(countSpaces("")).toBe(0);
  });

  test("no of spaces in \"Hello there !!\" is 2", () => {
    expect(countSpaces("Hello there !!")).toBe(2);
  });

  test("no of spaces in \"bazinga.bizz\" is 0", () => {
    expect(countSpaces("bazinga.bizz")).toBe(0);

  });
  test("no of spaces in \"a b c D # r4 fs\" is 6", () => {
    expect(countSpaces("a b c D # r4 fs")).toBe(6);
  });
});
