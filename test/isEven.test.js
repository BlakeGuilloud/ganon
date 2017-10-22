const {isEven} = require("../lib");

describe("isEven", () => {
  test("10 is even", () => {
    expect(isEven(10)).toBe(true);
  });

  test("5 is not even", () => {
    expect(isEven(5)).toBe(false);
  });

  test("A is not a number", () => {
    expect(() => {isEven("A");}).toThrowError("Provided value must be a number");
  });
});