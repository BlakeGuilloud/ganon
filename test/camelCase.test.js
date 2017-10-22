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

  test("A string with a 1 in it", () => {
    expect(camelCase("A string with a 1 in it")).toBe("aStringWithA1InIt");
  });

  test("Throws an error when type is not allowed", () => {
    expect(() => camelCase(1)).toThrow();
    expect(() => camelCase(0.5)).toThrow();
    expect(() => camelCase(null)).toThrow();
    expect(() => camelCase(undefined)).toThrow();
    expect(() => camelCase({})).toThrow();
  });
});
