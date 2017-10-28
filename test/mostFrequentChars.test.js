const { mostFrequentChars } = require("../lib");

describe("mostFrequentChars", () => {
  test("Test one character return", () => {
    expect(mostFrequentChars("AAABBC")).toEqual(["A"]);
  });
  test("Test multiple characters return", () => {
    expect(mostFrequentChars("AAABBBCCDD")).toEqual(["A", "B"]);
  });
  test("Test empty string", () => {
    expect(mostFrequentChars("")).toEqual([]);
  });

  test("Throw error on invalid type", () => {
    expect(() => mostFrequentChars(1)).toThrow("Invalid Type");
    expect(() => mostFrequentChars(null)).toThrow("Invalid Type");
    expect(() => mostFrequentChars(undefined)).toThrow("Invalid Type");
    expect(() => mostFrequentChars({})).toThrow("Invalid Type");
  });
});
