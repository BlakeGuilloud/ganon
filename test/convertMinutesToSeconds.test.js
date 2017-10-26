const { convertMinutesToSeconds } = require("../lib");

describe("convertMinutesToSeconds",() => {
  test("0 Minutes is 0 Seconds", () => {
    expect(convertMinutesToSeconds(0)).toBe(0);
  });
  test("5 Minutes is 300 Seconds",() => {
    expect(convertMinutesToSeconds(5)).toBe(300);
  });
  test("100 Minutes is 6000 Seconds",() => {
    expect(convertMinutesToSeconds(10)).toBe(600);
  });

  test("Throw invalid type",() => {
    expect(() => convertMinutesToSeconds(NaN)).toThrow("invalid input");
    expect(() => convertMinutesToSeconds(null)).toThrow("invalid input");
    expect(() => convertMinutesToSeconds(undefined)).toThrow("invalid input");
    expect(() => convertMinutesToSeconds({})).toThrow("invalid input");
    expect(() => convertMinutesToSeconds(-1)).toThrow("invalid input");
    expect(() => convertMinutesToSeconds("minutes")).toThrow("invalid input");
  });
});