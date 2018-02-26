const { isSymbol } = require("../lib");

describe("isSymbol", () => {
  test("returns true for an empty string", () => {
    expect(isSymbol(Symbol())).toBeTruthy();
    expect(isSymbol(Symbol("foo"))).toBeTruthy();
    expect(isSymbol(Symbol.iterator)).toBeTruthy();
  });

  test("returns false if argument is not Symbol", () => {
    expect(isSymbol(0)).toBeFalsy();
    expect(isSymbol(-1)).toBeFalsy();
    expect(isSymbol(["1", "2"])).toBeFalsy();
    expect(isSymbol({0: "123"})).toBeFalsy();
    expect(isSymbol(null)).toBeFalsy();
    expect(isSymbol(undefined)).toBeFalsy();
    expect(isSymbol()).toBeFalsy();
    expect(isSymbol("string")).toBeFalsy();
  });
});
