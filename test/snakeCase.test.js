const { snakeCase } = require("../lib");

describe("snakeCase", () => {
  test("A string with words", () => {
    expect(snakeCase("A string with words")).toBe("a_string_with_words");
  });

  test("another string of words", () => {
    expect(snakeCase("another string of words")).toBe("another_string_of_words");
  });

  test("YET ANOTHER STRING WITH YET MORE WORDS", () => {
    expect(snakeCase("YET ANOTHER STRING WITH YET MORE WORDS")).toBe("yet_another_string_with_yet_more_words");
  });

  test("A string with a 1 in it", () => {
    expect(snakeCase("A string with a 1 in it")).toBe("a_string_with_a_1_in_it");
  });

  test("Throws an error when type is not allowed", () => {
    expect(() => snakeCase(1)).toThrow();
    expect(() => snakeCase(0.5)).toThrow();
    expect(() => snakeCase(null)).toThrow();
    expect(() => snakeCase(undefined)).toThrow();
    expect(() => snakeCase({})).toThrow();
  });
});
