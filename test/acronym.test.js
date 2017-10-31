const { acronym } = require("../lib");

describe("acronym", () => {
  test("returns an acronym for a one word string", () => {
    expect(acronym("baconbits")).toEqual("B");
  });

  test("returns an acronym for a space separated string", () => {
    expect(acronym("bacon is tasty")).toEqual("BIT");
  });

  test("returns an acronym for a hyphen separated string", () => {
    expect(acronym("eggs-are-good")).toEqual("EAG");
  });

  test("returns an acronym for an underscore separated string", () => {
    expect(acronym("pancakes_are_awesome")).toEqual("PAA");
  });

  test("returns an acronym for string with spaces, hyphens, and underscores", () => {
    expect(acronym("this-string has_hypens-and also_underscores")).toEqual("TSHHAAU");
  });

  test("throws a typeError when not passed a string", () => {
    expect(() => acronym(1)).toThrowError(TypeError);
    expect(() => acronym(["string"])).toThrowError(TypeError);
    expect(() => acronym({})).toThrowError(TypeError);
  });

  test("throws an error if passed null/undefined", () => {
    expect(() => acronym(null)).toThrowError(Error);
    expect(() => acronym(undefined)).toThrowError(Error);
  });
});