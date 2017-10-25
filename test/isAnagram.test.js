const {isAnagram} = require("../lib");

describe("isAnagram", () => {
  test("Comparing strings \"Elvis\" and \"Lives\" should return true", () => {
    expect(isAnagram("Elvis", "Lives")).toBe(true);
  });

  test("Comparing strings \"William Shakespeare\" and \"I am a weakish speller\" should return true", () => {
    expect(isAnagram("William Shakespeare", "I am a weakish speller")).toBe(true);
  });

  test("Comparing strings \"Debit cardz\" and \"Bad credit\" should return false", () => {
    expect(isAnagram("Debit cardz", "Bad credit")).toBe(false);
  });

  test("Comparing strings \"Bad credit\" and \"Debit cardz\" should return false", () => {
    expect(isAnagram("Bad credit", "Debit cardz")).toBe(false);
  });

  test("Comparing strings \"Eleven plus two\" and \"Twelve plus two\" should return false", () => {
    expect(isAnagram("Eleven plus two", "Twelve plus two")).toBe(false);
  });

  test("Comparing arrays [\"q\",\"w\",\"e\",\"r\",\"t\",\"y\"] and [\"y\",\"q\",\"t\",\"w\",\"r\",\"e\"] should return true", () => {
    expect(isAnagram(["q", "w", "e", "r", "t", "y"], ["y", "q", "t", "w", "r", "e"])).toBe(true);
  });

  test("Comparing arrays [4,8,15,16,23,42,0,-1] and [8,23,42,0,4,16,-1,15] should return true", () => {
    expect(isAnagram([4, 8, 15, 16, 23, 42, 0, -1], [8, 23, 42, 0, 4, 16, -1, 15])).toBe(true);
  });
});
