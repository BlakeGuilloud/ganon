const { scramble } = require("../lib");

describe("scramble", () => {
  test("should return a string if passed a string", () => {
    expect(typeof scramble("string")).toBe("string");
  });

  test("should return an array if passed an array", () => {
    expect(Array.isArray(scramble([1, 2, 3]))).toBeTruthy();
  });

  test("should give return with same length as input", () => {
    expect(scramble("123456").length).toBe(6);
    expect(scramble([1, 2]).length).toBe(2);
  });

  test("should return string with same characters as input", () => {
    let testString = "TestString";
    let result = scramble(testString);
    for (let i of testString) {
      expect(result).toContain(i);
    }
  });

  test("should return array with same values as input", () => {
    let testArr = ["one", 5, "garbage", {key1: "value1"}];
    let result = scramble(testArr);
    for (let j of testArr) {
      expect(result).toContain(j);
    }
  });

  test("should not return a value matching the input", () => {
    let testString = "Ahoy Matey!";
    expect(scramble(testString)).not.toBe(testString);

    let testArr = ["one", 5, "garbage", {key1: "value1"}];
    expect(scramble(testArr)).not.toBe(testArr);
  });

  test("should throw a TypeError if argument is not a string or array", () => {
    expect(() => scramble()).toThrowError(TypeError);
    expect(() => scramble(1)).toThrowError(TypeError);
    expect(() => scramble({})).toThrowError(TypeError);
  });
});
