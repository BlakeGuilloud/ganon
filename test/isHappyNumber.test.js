const { isHappyNumber } = require("../lib");

describe("isHappyNumber", () => {
  test("Is Happy Number (1) ?", () => {
    expect(isHappyNumber(1)).toBe(true);
  });

  test("Is Happy Number (2) ?", () => {
    expect(isHappyNumber(2)).toBe(false);
  });

  test("Is Happy Number (319) ?", () => {
    expect(isHappyNumber(319)).toBe(true);
  });

  test("Throw error on invalid type", () => {
    expect(() => isHappyNumber("one")).toThrow("Invalid Type");
    expect(() => isHappyNumber("3")).toThrow("Invalid Type");
    expect(() => isHappyNumber([3])).toThrow("Invalid Type");
    expect(() => isHappyNumber(null)).toThrow("Invalid Type");
    expect(() => isHappyNumber(undefined)).toThrow("Invalid Type");
  });

  test("Throw error on invalid value", () => {
    expect(() => isHappyNumber(-1)).toThrow("Invalid Value");
  });
});
