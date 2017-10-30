const { countConsonants } = require("../lib");
const testTypes = require("./testTypes");

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
    testTypes
      .filter(t => typeof t != "string")
      .forEach(t => expect(() => countConsonants(t)).toThrowError(TypeError));
  });
});