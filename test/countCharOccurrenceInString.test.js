const { countCharOccurrenceInString } = require("../lib");

describe("countCharOccurrenceInString", () => {
  test("counting number of times string contains a value", () => {
    expect(countCharOccurrenceInString("abcdaefa", "a")).toBe(3);
    expect(countCharOccurrenceInString("aaAaaaAaaa", "a")).toBe(10);
  });

  test("Throw error on invalid type", () => {
    expect(() => countCharOccurrenceInString(null)).toThrow("Invalid Type");
    expect(() => countCharOccurrenceInString(undefined)).toThrow("Invalid Type");
    expect(() => countCharOccurrenceInString({})).toThrow("Invalid Type");
  });
});