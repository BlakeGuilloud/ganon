const { convertInchesToFeet } = require("../lib");

describe("convertInchesToFeet", () => {
  test("12 inches is 1 foot", () => {
    expect(convertInchesToFeet(12)).toBe(1);
  });

  test("14 inches is ", () => {
    expect(convertInchesToFeet(2)).toBe(1.1667);
  });

  test("0 inches is 0 feet", () => {
    expect(convertInchesToFeet(0)).toBe(0);
  });

  test("-12 inches is -1 feet", () => {
    expect(convertInchesToFeet(-12)).toBe(-1);
  });

  test("Throw error on invalid type", () => {
    expect(() => convertInchesToFeet("a inch")).toThrow("Invalid Type");
    expect(() => convertInchesToFeet(null)).toThrow("Invalid Type");
    expect(() => convertInchesToFeet(undefined)).toThrow("Invalid Type");
    expect(() => convertInchesToFeet({})).toThrow("Invalid Type");
  });
});
