const { remove } = require("../lib");

describe("remove", () => {
  test("should remove all of given character from given string", () => {
    expect(remove("baconbits", "b")).toEqual("aconits");
  });

  test("should consider casing when removing value", () => {
    expect(remove("AaaaA"), "A").toEqual("aaa");
  });

  test("should remove all of given value from a given array", () => {
    expect(remove([1, "lentils", 155, "garbanzo"], "lentils")).toBe([1, 155, "garbanzo"]);
  });

  test("should throw error if first argument isn't a string or array", () => {
    expect(() => remove({}, 123)).toThrowError(TypeError);
    expect(() => remove(1, "apple")).toThrowError(TypeError);
  });

  test("should throw error if first argument is string but second isnt", () => {
    expect(() => remove("str1ng", 1)).toThrowError(TypeError);
  });

  test("should throw error if missing either argument", () => {
    expect(() => remove(null, 15)).toThrowError(Error);
    expect(() => remove("string")).toThrowError(Error);
    expect(() => remove([1, 2, 3])).toThrowError(Error);
  });
});
