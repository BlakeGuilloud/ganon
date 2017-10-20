const { convertCelsiusToFahrenheit } = require("../lib");

describe("convertCelsiusToFahrenheit", () => {
  test("10 degree Celsius is 50.000 degrees Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(10)).toBeCloseTo(50.000, 1);
  });

  test("11 degree Celsius is 51.800 degrees Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(11)).toBeCloseTo(51.800, 1);
  });

  test("-17 degree Celsius is 1.3999999 degrees Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(-17)).toBeCloseTo(1.3999999, 1);
  });

  test("39 degree Celsius is 102.200 degrees Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(39)).toBeCloseTo(102.200, 1);
  });

  test("100 degree Celsius is 212.00 degrees Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(100)).toBeCloseTo(212.00, 1);
  });
});
