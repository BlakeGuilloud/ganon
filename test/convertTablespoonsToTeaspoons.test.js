const { convertTablespoonsToTeaspoons } = require("../lib");

describe("convertTablespoonsToTeaspoons", () => {
  test("function converts tablespoons to teaspoons correctly", () => {
    expect(convertTablespoonsToTeaspoons(1)).toBe(3);
    expect(convertTablespoonsToTeaspoons(5)).toBe(15);
    expect(convertTablespoonsToTeaspoons(20)).toBe(60);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertTablespoonsToTeaspoons(null)).toThrow();
    expect(() => convertTablespoonsToTeaspoons(true)).toThrow();
    expect(() => convertTablespoonsToTeaspoons(false)).toThrow();
    expect(() => convertTablespoonsToTeaspoons(undefined)).toThrow();
    expect(() => convertTablespoonsToTeaspoons([])).toThrow();
  });

  test("throw error when the input is negative", () => {
    expect(() => convertTablespoonsToTeaspoons(-1)).toThrow();
  });
});
