const { isVowel } = require("../lib");

describe("isVowel", () => {
  test("a is a vowel", () => {
    expect(isVowel("a")).toBe(true);
  });

  test("e is a vowel", () => {
    expect(isVowel("e")).toBe(true);
  });

  test("i is a vowel", () => {
    expect(isVowel("i")).toBe(true);
  });

  test("o is a vowel", () => {
    expect(isVowel("o")).toBe(true);
  });

  test("u is a vowel", () => {
    expect(isVowel("u")).toBe(true);
  });

  test("A is a vowel", () => {
    expect(isVowel("A")).toBe(true);
  });

  test("E is a vowel", () => {
    expect(isVowel("E")).toBe(true);
  });

  test("I is a vowel", () => {
    expect(isVowel("I")).toBe(true);
  });

  test("O is a vowel", () => {
    expect(isVowel("O")).toBe(true);
  });

  test("U is a vowel", () => {
    expect(isVowel("U")).toBe(true);
  });

  test("b is not a vowel", () => {
    expect(isVowel("b")).toBe(false);
  });

  test("B is not a vowel", () => {
    expect(isVowel("B")).toBe(false);
  });
});