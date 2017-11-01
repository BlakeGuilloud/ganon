const { countCharOccuranceInString } = require("../lib");

describe("countCharOccuranceInString", () => {
  test("counting number of times string contains a value", () => {
    expect(countCharOccuranceInString("abcdaefa", "a")).toBe(3);
    expect(countCharOccuranceInString("aaAaaaAaaa", "a")).toBe(10);
  });

  test("Throw error on invalid type", () => {
    expect(() => countCharOccuranceInString(null)).toThrow("Invalid Type");
    expect(() => countCharOccuranceInString(undefined)).toThrow("Invalid Type");
    expect(() => countCharOccuranceInString({})).toThrow("Invalid Type");
  });
});
