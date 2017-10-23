const { convertFeetToInches } = require("../lib");

describe("convertFeetToInches", () => {
  test("Converts 70 feet to inches", () => {
    expect(convertFeetToInches(70)).toBeCloseTo(840);
  });

  test("Converts .1 feet to inches", () => {
    expect(convertFeetToInches(.1)).toBeCloseTo(1.2);
  });

  test("Converts 0 feet to inches", () => {
    expect(convertFeetToInches(0)).toBe(0);
  });

  it("should throw an error if feet is not a number", () => {
    expect(() => convertFeetToInches(false)).toThrow();
    expect(() => convertFeetToInches(null)).toThrow();
    expect(() => convertFeetToInches(-5)).toThrow();
    expect(() => convertFeetToInches({})).toThrow();
    expect(() => convertFeetToInches("five")).toThrow();
  });
});