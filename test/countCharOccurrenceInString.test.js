const { countCharOccurrenceInString } = require("../lib");

describe("countCharOccurrenceInString", () => {
  test("counting number of times string contains a value", () => {
    expect(countCharOccurrenceInString("abcdaefa", "a")).toBe(3);
    expect(countCharOccurrenceInString("aaAaaaAaaa", "a")).toBe(10);
  });

  test("Throw error on invalid type", () => {
    expect(() => countCharOccurrenceInString(null)).toThrowError(TypeError);
    expect(() => countCharOccurrenceInString(undefined)).toThrowError(TypeError);
    expect(() => countCharOccurrenceInString({})).toThrowError(TypeError);
    expect(() => countCharOccurrenceInString("abcd", null)).toThrowError(TypeError);
    expect(() => countCharOccurrenceInString("abcd", undefined)).toThrowError(TypeError);
    expect(() => countCharOccurrenceInString("abcd", {})).toThrowError(TypeError);
  });

  test("Throw error if second argument is a string greater than one character", () => {
    expect(() => countCharOccurrenceInString("abcd", "ab")).toThrow("Second argument to CountCharOccurrenceInString must be a one-character string");
  });
});