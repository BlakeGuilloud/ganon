const { abbreviateMiddleName } = require("../lib");

describe("format name", () => {
  test("sample names", () => {
    expect(abbreviateMiddleName("Leslie Barbara Knope")).toBe("Leslie B. Knope");
    expect(abbreviateMiddleName("ann meredith perkins")).toBe("Ann M. Perkins");
  });

  test("throw error when the argument is not a string", () => {
    expect(() => abbreviateMiddleName(null)).toThrow();
    expect(() => abbreviateMiddleName(true)).toThrow();
    expect(() => abbreviateMiddleName(undefined)).toThrow();
    expect(() => abbreviateMiddleName(1)).toThrow();
  });

  test("throw error when the argument has less than 2 words", () => {
    expect(() => abbreviateMiddleName("Ben Wyatt")).toThrow();
    expect(() => abbreviateMiddleName("April")).toThrow();
  });

  test("throw error when argument has non alphabet characters", () => {
    expect(() => abbreviateMiddleName("/")).toThrow();
    expect(() => abbreviateMiddleName("123")).toThrow();
    expect(() => abbreviateMiddleName("error?")).toThrow();
  });
});