const { convertCelsiusToKelvin } = require("../lib");

describe("convertCelsiusToKelvin", () => {
  test("0 degrees Celcius is 273.15 degrees Kelvin", () => {
    expect(convertCelsiusToKelvin(0)).toBeCloseTo(273.15, 1);
  });

  test("-273.15 degrees Celsius is 0 degrees Kelvin", () => {
    expect(convertCelsiusToKelvin(-273.15)).toBeCloseTo(0, 1);
  });

  test("22 degree Celsius is 295,15 degrees Kelvin", () => {
    expect(convertCelsiusToKelvin(22)).toBeCloseTo(295.15, 1);
  });

  test("-300 degrees Celsius is -26.85 degrees Kelvin", () => {
    //Below absolute zero
    expect(convertCelsiusToKelvin(-300)).toBeCloseTo(-26.85, 1);
  });

  test("100 degree Celsius is 373,15 degrees Kelvin", () => {
    expect(convertCelsiusToKelvin(100)).toBeCloseTo(373.15, 1);
  });
});
