const { countVovels } = require("../lib");

describe("countVovels", () => {
  test("correct consonant count", () => {
    expect(countVovels("pig")).toEqual(1);
    expect(countVovels("trash")).toEqual(1);
    expect(countVovels("me")).toEqual(1);
    expect(countVovels("string")).toEqual(1);
    expect(countVovels("thanks")).toEqual(1);
    expect(countVovels("eat")).toEqual(2);
    expect(countVovels("eggs")).toEqual(1);
    expect(countVovels("quack")).toEqual(2);
  });
  test("empty string count", () => {
    expect(countVovels("")).toEqual(0);
  });
  test("invalid parameters", () => {
    expect(() => countVovels({obj:"val"})).toThrowError(TypeError);
    expect(() => countVovels(["array"])).toThrowError(TypeError);
    expect(() => countVovels(undefined)).toThrowError(TypeError);
    expect(() => countVovels(null)).toThrowError(TypeError);
  });
});