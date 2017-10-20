const { convertCelciusToFahrenheit } = require("../lib");

describe("convertCelciusToFahrenheit", () => {
  test("10 degree Celcius is 50.000 degrees Fahrenheit", () => {
    expect(convertCelciusToFahrenheit(10)).toBeCloseTo(50.000, 1);
  });

  test("11 degree Celcius is 51.800 degrees Fahrenheit", () => {
    expect(convertCelciusToFahrenheit(11)).toBeCloseTo(51.800, 1);
  });

  test("-17 degree Celcius is 1.3999999 degrees Fahrenheit", () => {
    expect(convertCelciusToFahrenheit(-17)).toBeCloseTo(1.3999999, 1);
  });

  test("39 degree Celcius is 102.200 degrees Fahrenheit", () => {
    expect(convertCelciusToFahrenheit(39)).toBeCloseTo(102.200, 1);
  });

  test("100 degree Celcius is 212.00 degrees Fahrenheit", () => {
    expect(convertCelciusToFahrenheit(100)).toBeCloseTo(212.00, 1);
  });
});