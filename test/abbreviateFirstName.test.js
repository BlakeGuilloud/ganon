const { abbreviateFirstName } = require("../lib");

describe("format name", () => {
  test("sample names", () => {
    expect(abbreviateFirstName("John Smith")).toBe("J. Smith");
    expect(abbreviateFirstName("jane doe")).toBe("J. Doe");
  });

  test("throw error when the argument is not a string", () => {
    expect(() => abbreviateFirstName(null)).toThrow();
    expect(() => abbreviateFirstName(true)).toThrow();
    expect(() => abbreviateFirstName(undefined)).toThrow();
    expect(() => abbreviateFirstName(1)).toThrow();
  });

  test("throw error when the argument does not have 2 words", () => {
    expect(() => abbreviateFirstName("Michale Gary Scott")).toThrow();
    expect(() => abbreviateFirstName("Dwight Kurt Schrute")).toThrow();
    expect(() => abbreviateFirstName("Jim")).toThrow();
    expect(() => abbreviateFirstName("Pam")).toThrow();
  });

  test("throw error when argument has non alphabet characters", () => {
    expect(() => abbreviateFirstName("/")).toThrow();
    expect(() => abbreviateFirstName("123")).toThrow();
    expect(() => abbreviateFirstName("error?")).toThrow();
  });
});