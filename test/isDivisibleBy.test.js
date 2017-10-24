const { isDivisibleBy } = require("../lib");

describe("isDivisibleBy", () => {
  test("Twelve is divisible by 2, 3, and 4", () => {
    expect(isDivisibleBy(12, [2, 3, 4])).toBe(true);
  });

  test("5 is NOT divisible by 2", () => {
    expect(isDivisibleBy(5, [2])).toBe(false);
  });

  test("1 is NOT divisible by 3 and 4", () => {
    expect(isDivisibleBy(1, [3, 4])).toBe(false);
  });

  test("Throw error on invalid type", () => {
    expect(() => isDivisibleBy(1, ["one"])).toThrow("Invalid Type");
    expect(() => isDivisibleBy("one", [1, 1])).toThrow("Invalid Type");
    expect(() => isDivisibleBy("one", "one")).toThrow("Invalid Type");
    expect(() => isDivisibleBy(1, [1, "one"])).toThrow("Invalid Type");
    expect(() => isDivisibleBy(undefined, undefined)).toThrow("Invalid Type");
    expect(() => isDivisibleBy({}, {})).toThrow("Invalid Type");
  });
});
