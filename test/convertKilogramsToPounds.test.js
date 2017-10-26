const convert = require("../lib/convertKilogramsToPounds");

describe("convertCelsiusToFahrenheit", () => {
  test("10 degree Celsius is 50.000 degrees Fahrenheit", () => {
    expect(convert(5)).toBeCloseTo(11.02, 1);
  });

});
