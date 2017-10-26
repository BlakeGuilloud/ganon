const {convertFeetInchesToCentimeter} = require("../lib");

describe("convertFeetInchesToCentimeter", () => {

  test("Throws exception for invalid arguments", () => {
    expect(() => convertFeetInchesToCentimeter("", "")).toThrow();
    expect(() => convertFeetInchesToCentimeter(6, "3a")).toThrow();
    expect(() => convertFeetInchesToCentimeter("6a", 3)).toThrow();
  });

  test("Convert zero heights", () => {
    expect(convertFeetInchesToCentimeter(0, 0)).toBe(0);
  });
  test("Convert positive heights", () => {
    expect(convertFeetInchesToCentimeter(5, 7)).toBeCloseTo(170.18);
  });
  test("Convert from numeric strings and integers", () => {
    expect(convertFeetInchesToCentimeter("5", 7)).toBeCloseTo(170.18);
  });
  test("Convert from integers and numeric strings", () => {
    expect(convertFeetInchesToCentimeter(5, "7")).toBeCloseTo(170.18);
  });
  test("Convert from only numeric strings", () => {
    expect(convertFeetInchesToCentimeter("5", "7")).toBeCloseTo(170.18);
  });
});
