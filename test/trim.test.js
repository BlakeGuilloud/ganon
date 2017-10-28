const { trim } = require("../lib");

describe("mostFrequentChars", () => {
  test("Test one character without spaces", () => {
    expect(trim("A")).toEqual("A");
    expect(trim("B")).toEqual("B");
  });

  test("Test one character with multiple spaces", () => {
    expect(trim("A  \n")).toEqual("A");
    expect(trim("\t  A  ")).toEqual("A");
    expect(trim("   A  ")).toEqual("A");
    expect(trim("\r A  ")).toEqual("A");
  });

  test("Test text with multiple spaces", () => {
    expect(trim("ABC  \n")).toEqual("ABC");
    expect(trim("\t  A B ")).toEqual("A B");
    expect(trim("   A \n T ")).toEqual("A \n T");
    expect(trim("\r AB C D T ")).toEqual("AB C D T");
  });

  test("Test only spaces", () => {
    expect(trim("  \n")).toEqual("");
    expect(trim("\t \t \n")).toEqual("");
    expect(trim("     ")).toEqual("");
    expect(trim("\r \n ")).toEqual("");
  });

  test("Test empty string", () => {
    expect(trim("")).toEqual("");
  });

  test("Throw error on invalid type", () => {
    expect(() => trim(1)).toThrow("Invalid Type");
    expect(() => trim(null)).toThrow("Invalid Type");
    expect(() => trim(undefined)).toThrow("Invalid Type");
    expect(() => trim({})).toThrow("Invalid Type");
  });
});
