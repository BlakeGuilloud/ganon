const { arrayUppercase } = require("../lib");

describe("arrayUppercase", () => {
  it("should throw when the first argument is not an array", () => {
    expect(() => arrayUppercase()).toThrow("Array argument is not an array");
    expect(() => arrayUppercase(5)).toThrow("Array argument is not an array");
    expect(() => arrayUppercase([])).not.toThrow("Array argument is not an array");
  });

  it("should throw when the array contains a value that is not a string", () => {
    expect(() => arrayUppercase([1])).toThrow("Array argument can only contain strings");
    expect(() => arrayUppercase(["Hello", "World", 1, 3])).toThrow("Array argument can only contain strings");
    expect(() => arrayUppercase(["Hello", "World", false, null, 1])).toThrow("Array argument can only contain strings");
  });

  it("should return an empty array when an empty array is supplied", () => {
    expect(arrayUppercase([])).toEqual([]);
  });

  it("should return an array with uppercase strings", () => {
    expect(arrayUppercase(["Hello", "WOrLd", "1"])).toEqual(["HELLO", "WORLD", "1"]);
    expect(arrayUppercase(["Hel1lo", "WOrLd", "sTrIng"])).toEqual(["HEL1LO", "WORLD", "STRING"]);
    expect(arrayUppercase(["hEL!LO", "wORLD", "!"])).toEqual(["HEL!LO", "WORLD", "!"]);
  });
});
