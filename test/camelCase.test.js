const { camelCase } = require("../lib");

describe("camelCase", () => {
  test("A string with words", () => {
    expect(camelCase("A string with words")).toBe("aStringWithWords");
  });

  test("another string of words", () => {
    expect(camelCase("another string of words")).toBe("anotherStringOfWords");
  });

  test("YET ANOTHER STRING WITH YET MORE WORDS", () => {
    expect(camelCase("YET ANOTHER STRING WITH YET MORE WORDS")).toBe("yetAnotherStringWithYetMoreWords");
  });
});
