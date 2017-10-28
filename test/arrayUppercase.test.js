const { arrayUppercase } = require("../lib");

describe("arrayUppercase", () => {
  it("should throw when the first argument is not an array", () => {
    expect(() => arrayUppercase()).toThrow();
    expect(() => arrayUppercase(5)).toThrow();
    expect(() => arrayUppercase([])).not.toThrow();
  });

  it("should throw when the first value of the array is not a string", () => {
    expect(() => arrayUppercase([1])).toThrow();
  });

  it("should return an empty array when an empty array is supplied", () => {
    expect(arrayUppercase([])).toEqual([]);
  });

  it("should return an array with uppercase strings", () => {
    expect(arrayUppercase(["Hello", "World", 1])).toEqual(["HELLO", "WORLD"]);
    expect(arrayUppercase(["hELLO", "wORLD", "!"])).toEqual(["HELLO", "WORLD", "!"]);
  });
});
