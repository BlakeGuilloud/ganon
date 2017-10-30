const { countConsonants } = require("../lib");

describe("countConsonants", () => {
  test("correct consonant count", () => {
    expect(countConsonants("pig")).toEqual(2);
    expect(countConsonants("trash")).toEqual(4);
    expect(countConsonants("me")).toEqual(1);
    expect(countConsonants("string")).toEqual(5);
    expect(countConsonants("thanks")).toEqual(5);
    expect(countConsonants("eat")).toEqual(1);
    expect(countConsonants("eggs")).toEqual(3);
    expect(countConsonants("quack")).toEqual(3);
  });
  test("empty string count", () => {
    expect(countConsonants("")).toEqual(0);
  });
  test("invalid parameters", () => {
    expect(() => countConsonants({obj:"val"})).toThrowError(TypeError);
    expect(() => countConsonants(["array"])).toThrowError(TypeError);
    expect(() => countConsonants(undefined)).toThrowError(TypeError);
    expect(() => countConsonants(null)).toThrowError(TypeError);
  });
});