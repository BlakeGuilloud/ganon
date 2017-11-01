const { convertKilowattsToHorsepower } = require("../lib");

describe("convertKilowattsToHorsepower", () => {
  test("function converts kilowatts to horsepower correctly", () => {
    expect(convertKilowattsToHorsepower(2)).toBe(2.682);
    expect(convertKilowattsToHorsepower(5)).toBe(6.705);
    expect(convertKilowattsToHorsepower(10)).toBe(13.410);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertKilowattsToHorsepower(null)).toThrow();
    expect(() => convertKilowattsToHorsepower(true)).toThrow();
    expect(() => convertKilowattsToHorsepower(false)).toThrow();
    expect(() => convertKilowattsToHorsepower(undefined)).toThrow();
    expect(() => convertKilowattsToHorsepower([])).toThrow();
  });

  test("throw error when the input is negative", () => {
    expect(() => convertKilowattsToHorsepower(-1)).toThrow();
  });
});
