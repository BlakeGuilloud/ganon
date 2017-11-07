const { calculateBMI } = require("../lib");

describe("calculateBMI", () => {
  test("function calculates BMI correctly", () => {
    expect(calculateBMI(66, 120)).toBe(19.4);
    expect(calculateBMI(70, 150)).toBe(21.5);
    expect(calculateBMI(80, 300)).toBe(33.0);
    expect(calculateBMI(76, 200)).toBe(24.3);
  });
  test("throw error when the arguments are not numbers", () => {
    expect(() => calculateBMI(60, null)).toThrow();
    expect(() => calculateBMI(null, 200)).toThrow();
    expect(() => calculateBMI(60, true)).toThrow();
    expect(() => calculateBMI(60, false)).toThrow();
    expect(() => calculateBMI(60, undefined)).toThrow();
    expect(() => calculateBMI(60, [])).toThrow();
    expect(() => calculateBMI(false, null)).toThrow();
  });
  test("throw error when the inputs are negative", () => {
    expect(() => calculateBMI(-60, 150)).toThrow();
    expect(() => calculateBMI(60, -150)).toThrow();
    expect(() => calculateBMI(-60, -150)).toThrow();
  });
});
