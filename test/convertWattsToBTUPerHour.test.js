const { convertWattsToBTUPerHour } = require("../lib");

describe("convertWattsToBTUPerHour", () => {
  test("function converts Watts to BTU/hr correctly", () => {
    expect(convertWattsToBTUPerHour(1)).toBe(3.41);
    expect(convertWattsToBTUPerHour(5)).toBe(17.05);
    expect(convertWattsToBTUPerHour(20)).toBe(68.2);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertWattsToBTUPerHour(null)).toThrow();
    expect(() => convertWattsToBTUPerHour(true)).toThrow();
    expect(() => convertWattsToBTUPerHour(false)).toThrow();
    expect(() => convertWattsToBTUPerHour(undefined)).toThrow();
    expect(() => convertWattsToBTUPerHour([])).toThrow();
  });

  test("throw error when the input is negative", () => {
    expect(() => convertWattsToBTUPerHour(-1)).toThrow();
  });
});
