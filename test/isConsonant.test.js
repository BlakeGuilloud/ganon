const { isConsonant } = require("../lib");

describe("isConsonant", () => {
  test("a is not a consonant", () => {
    expect(isConsonant("a")).toBe(false);
  });

  test("b is a consonant", () => {
    expect(isConsonant("b")).toBe(true);
  });

  test("B is a consonant", () => {
    expect(isConsonant("B")).toBe(true);
  });

  test("1 is not a consonant", () => {
    expect(isConsonant("1")).toBe(false);
  });

  test("x is a consonant", () => {
    expect(isConsonant("x")).toBe(true);
  });

  test("Z is a consonant", () => {
    expect(isConsonant("Z")).toBe(true);
  });

  test("U is not a consonant", () => {
    expect(isConsonant("U")).toBe(false);
  });
});