const { convertFeetToMiles } = require("../lib");

describe("convertFeetToMiles", () => {
  test("should convert feet to miles", () => {
    expect(convertFeetToMiles(1)).toBeCloseTo(0.000189394);
    expect(convertFeetToMiles(5280)).toBe(1);
    expect(convertFeetToMiles(234087)).toBeCloseTo(44.33);
    expect(convertFeetToMiles(0)).toBe(0);
    expect(convertFeetToMiles(345.63)).toBeCloseTo(0.0654);
  });
});