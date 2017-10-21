const { isInteger } = require("../lib");

describe("isInteger", () => {
  test("Number 1 is an integer", () => {
    expect(isInteger(1)).toBe(true);
  });

  test("Number 100 is an integer", () => {
    expect(isInteger(100)).toBe(true);
  });

  test("Number -10000 is an integer", () => {
    expect(isInteger(-10000)).toBe(true);
  });

  test("Number 0.77 is an integer", () => {
    expect(isInteger(0.77)).toBe(false);
  });

  test("Number 4/2 is an integer", () => {
    expect(isInteger(4 / 2)).toBe(true);
  });

  test("Array [] is an integer", () => {
    expect(isInteger([])).toBe(false);
  });

  test("String bingBangBaz is an integer", () => {
    expect(isInteger("bingBangBaz")).toBe(false);
  });
});
