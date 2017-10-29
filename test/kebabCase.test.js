const { kebabCase } = require("../lib");

describe("kebabCase", () => {
  test("A string with words", () => {
    expect(kebabCase("A string with words")).toBe("a-string-with-words");
  });

  test("YET ANOTHER STRING WITH YET MORE WORDS", () => {
    expect(kebabCase("YET ANOTHER STRING WITH YET MORE WORDS")).toBe(
      "yet-another-string-with-yet-more-words"
    );
  });

  test("A string with a 1 in it", () => {
    expect(kebabCase("A string with a 1 in it")).toBe(
      "a-string-with-a-1-in-it"
    );
  });

  test("A constant string", () => {
    expect(kebabCase("__FIZZ_BUZZ__")).toBe("fizz-buzz");
  });

  test("Throws an error when type is not allowed", () => {
    expect(() => kebabCase(1)).toThrow();
    expect(() => kebabCase(0.5)).toThrow();
    expect(() => kebabCase(null)).toThrow();
    expect(() => kebabCase(undefined)).toThrow();
    expect(() => kebabCase({})).toThrow();
  });
});
