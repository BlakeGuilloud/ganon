const { arrayLowercase } = require("../lib");

describe("arrayLowercase", () => {
  it("should throw when the first argument is not an array", () => {
    expect(() => arrayLowercase()).toThrow();
    expect(() => arrayLowercase(5)).toThrow();
    expect(() => arrayLowercase([])).not.toThrow();
  });

  it("should throw when the first value of the array is not a string", () => {
    expect(() => arrayLowercase([1])).toThrow();
  });

  it("should return an empty array when an empty array is supplied", () => {
    expect(arrayLowercase([])).toEqual([]);
  });

  it("should return an array with lowercase strings", () => {
    expect(arrayLowercase(["Hello", "World", 1])).toEqual(["hello", "world"]);
    expect(arrayLowercase(["hELLO", "wORLD", "!"])).toEqual(["hello", "world", "!"]);
  });
});
