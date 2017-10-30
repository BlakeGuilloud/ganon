const { findAndRemove } = require("../lib");

describe("findAndRemove", () => {
  test("removes all of given character from given string", () => {
    expect(findAndRemove("baconbits", "b")).toEqual("aconits");
  });

  test("should consider casing when removing value", () => {
    expect(findAndRemove("AaaaA","A")).toEqual("aaa");
  });

  test("removes all of given value from given array", () => {
    expect(findAndRemove([1, 2, 3, 4, 5, 6, 76, 87, 8, 76, 4], 3)).toEqual([1, 2, 4, 5, 6, 76, 87, 8, 76, 4]);
    expect(findAndRemove([1, 2, 4, 5, 6, 54, 56, 45, 6, 4, 4], 4)).toEqual([1, 2, 5, 6, 54, 56, 45, 6]);
    expect(findAndRemove([1, "lentils", 155, "garbanzo"], "lentils")).toEqual([1, 155, "garbanzo"]);
  });

  test("returns false when there is no such value found", () => {
    expect(findAndRemove([1, 2, 4, 5, 6, 54, 56, 45, 6, 4, 4], 100)).toEqual(false);
    expect(findAndRemove("my string", "a")).toEqual(false);
  });

  test("returns false when empty string or array is passed", () => {
    expect(findAndRemove([], 4)).toEqual(false);
    expect(findAndRemove("", "h")).toEqual(false);
  });

  test("should throw error if first argument isn't a string or array", () => {
    expect(() => findAndRemove({}, 123)).toThrowError(TypeError);
    expect(() => findAndRemove(1, "apple")).toThrowError(TypeError);
  });

  test("throws error when second argument is not passed", () => {
    expect(() => findAndRemove([1, 2, 43, 5])).toThrowError("Second argument is required");
    expect(() => findAndRemove([1, 2, 43, 5], null)).toThrowError("Second argument is required");
  });

  test("should throw error if first argument is string but second isnt", () => {
    expect(() => findAndRemove("str1ng", 1)).toThrowError(TypeError);
  });

  test("should throw error if missing either argument", () => {
    expect(() => findAndRemove(null, 15)).toThrowError(Error);
    expect(() => findAndRemove("string")).toThrowError(Error);
    expect(() => findAndRemove([1, 2, 3])).toThrowError(Error);
  });
});