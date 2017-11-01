const { abbreviateLastName } = require("../lib");

describe("Abbreviate last name", () => {
  test("abbreviates last names", () => {
    expect(abbreviateLastName("John Doe")).toBe("John D.");
    expect(abbreviateLastName("Jane Doe")).toBe("Jane D.");
  });

  test("throw error when the argument is not a string", () => {
    expect(() => abbreviateLastName(null)).toThrow();
    expect(() => abbreviateLastName(true)).toThrow();
    expect(() => abbreviateLastName(undefined)).toThrow();
    expect(() => abbreviateLastName(1)).toThrow();
  });

  test("throw error when the argument does not have 2 words", () => {
    expect(() => abbreviateLastName("First Middle Last")).toThrow();
    expect(() => abbreviateLastName("Last Middle First")).toThrow();
    expect(() => abbreviateLastName("Abe")).toThrow();
    expect(() => abbreviateLastName("Johnson")).toThrow();
  });

  test("throw error when argument has non alphabet characters", () => {
    expect(() => abbreviateLastName("/")).toThrow();
    expect(() => abbreviateLastName("123")).toThrow();
    expect(() => abbreviateLastName("error?")).toThrow();
  });
});
