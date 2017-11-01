const { countVowels } = require("../lib");

describe("countVowels", () => {
  test("correct consonant count", () => {
    expect(countVowels("pig")).toEqual(1);
    expect(countVowels("trash")).toEqual(1);
    expect(countVowels("me")).toEqual(1);
    expect(countVowels("string")).toEqual(1);
    expect(countVowels("thanks")).toEqual(1);
    expect(countVowels("eat")).toEqual(2);
    expect(countVowels("eggs")).toEqual(1);
    expect(countVowels("quack")).toEqual(2);
  });
  test("empty string count", () => {
    expect(countVowels("")).toEqual(0);
  });
  test("invalid parameters", () => {
    expect(() => countVowels({obj:"val"})).toThrowError(TypeError);
    expect(() => countVowels(["array"])).toThrowError(TypeError);
    expect(() => countVowels(undefined)).toThrowError(TypeError);
    expect(() => countVowels(null)).toThrowError(TypeError);
  });
});