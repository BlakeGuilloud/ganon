const { convertOunceToMl } = require("../lib");

describe("convert accurately", () => {
  test("sample value", () => {
    expect(convertOunceToMl(1)).toBe(29.57);
    expect(convertOunceToMl(2.5)).toBe(73.93);
    expect(convertOunceToMl(57)).toBe(1685.69);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertOunceToMl(null)).toThrow();
    expect(() => convertOunceToMl(true)).toThrow();
    expect(() => convertOunceToMl(undefined)).toThrow();
    expect(() => convertOunceToMl("1")).toThrow();
  });
});