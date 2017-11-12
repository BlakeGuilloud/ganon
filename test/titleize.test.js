const { titleize } = require("../lib");

describe("titleize", () => {
  test("returns a title for a space separated and lowercased string", () => {
    expect(titleize("man from the boondocks")).toEqual("Man From The Boondocks");
  });

  test("returns a title for a space and hyphen separated string", () => {
    expect(titleize("x-men: the last stand")).toEqual("X Men: The Last Stand");
  });

  test("returns an title for an undesrcore separated and lowercased string", () => {
    expect(titleize("raiders_of_the_lost_ark")).toEqual("Raiders Of The Lost Ark");
  });

  test("throws a typeError when not passed a string", () => {
    expect(() => titleize(1)).toThrowError(TypeError);
    expect(() => titleize(["string"])).toThrowError(TypeError);
    expect(() => titleize({})).toThrowError(TypeError);
  });

  test("throws an error if passed null/undefined", () => {
    expect(() => titleize(null)).toThrowError(Error);
    expect(() => titleize(undefined)).toThrowError(Error);
  });
});
