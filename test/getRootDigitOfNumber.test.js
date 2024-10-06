const { getRootDigitOfNumber } = require("../lib");

describe("getRootDigitOfNumber", () => {
  test("getRootDigitOfNumber(0)", () => {
    expect(getRootDigitOfNumber(0)).toBe(0);
  });

  test("getRootDigitOfNumber(181)", () => {
    expect(getRootDigitOfNumber(181)).toBe(1);
  });

  test("getRootDigitOfNumber(15674)", () => {
    expect(getRootDigitOfNumber(15674)).toBe(5);
  });

  test("getRootDigitOfNumber(999999999999)", () => {
    expect(getRootDigitOfNumber(999999999999)).toBe(9);
  });
});