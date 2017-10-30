const { toPigLatin } = require("../lib");

describe("toPigLatin", () => {
  test("valid string translations", () => {
    expect(toPigLatin("pig")).toEqual("igpay");
    expect(toPigLatin("trash")).toEqual("ashtray");
    expect(toPigLatin("me")).toEqual("emay");
    expect(toPigLatin("string")).toEqual("ingstray");
    expect(toPigLatin("thanks")).toEqual("anksthay");
    expect(toPigLatin("eat")).toEqual("eatay");
    expect(toPigLatin("eggs")).toEqual("eggsay");
    expect(toPigLatin("quack")).toEqual("ackquay");
  });
  test("empty string translation", () => {
    expect(toPigLatin("")).toEqual("");
  });
  test("invalid parameters", () => {
    expect(() => toPigLatin({obj:"val"})).toThrowError(TypeError);
    expect(() => toPigLatin(["array"])).toThrowError(TypeError);
    expect(() => toPigLatin(undefined)).toThrowError(TypeError);
    expect(() => toPigLatin(null)).toThrowError(TypeError);
  });
});