const { convertFahrenheitToCelsius } = require("../lib");

describe("convertFahrenheitToCelsius", () => {
  test("Converts 74 degrees Fahrenheit to equal 23.3 Celsius", () => {
    expect(convertFahrenheitToCelsius(74)).toBe(23.333333333333336);
  });

  test("Converts 90 degrees Fahrenheit to equal 32.2 Celsius", () => {
    expect(convertFahrenheitToCelsius(90)).toBe(32.22222222222222);
  });

  test("Converts 100 degrees Fahrenheit to equal 37.7 Celsius", () => {
    expect(convertFahrenheitToCelsius(100)).toBe(37.77777777777778);
  });

  test("Converts 34 degrees Fahrenheit to equal 1.11 Celsius", () => {
    expect(convertFahrenheitToCelsius(34)).toBe(1.1111111111111112);
  });
});
