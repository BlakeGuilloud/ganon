const { countAlphabets } = require("../lib");

describe("countAlphabets", () => {
  test("countAlphabets should return correct count of alphabets", () => {
    expect(countAlphabets("a")).toBe("a1");
  });

  test("countAlphabets of 'aaa' to equal 'a3'", () => {
    expect(countAlphabets("aaa")).toBe("a3");
  });

  test("countAlphabets of 'aabb' to equal 'a2b2'", () => {
    expect(countAlphabets("aabb")).toBe("a2b2");
  });

  test("countAlphabets of 'acabb' to equal 'a2c1b2'", () => {
    expect(countAlphabets("acabb")).toBe("a2c1b2");
  });
});
