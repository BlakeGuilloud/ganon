const { areaOfTriangle } = require("../lib");

describe("areaOfTriangle", () => {
  it("should throw an error if either base or height is not a positive number", () => {
    expect(() => areaOfTriangle(5,0)).toThrow();
    expect(() => areaOfTriangle(0,5)).toThrow();
    expect(() => areaOfTriangle(-5,5)).toThrow();
    expect(() => areaOfTriangle(5,-5)).toThrow();
    expect(() => areaOfTriangle("five","five")).toThrow();
  });

  it("with base 10 and height 5 should have an area of 25", () => {
    expect(areaOfTriangle(10,5)).toBe(25);
  });

  it("with base 5 and height 10 should have an area of 25", () => {
    expect(areaOfTriangle(5,10)).toBe(25);
  });

  it("with base 5 and height 5 should have an area of 12.5", () => {
    expect(areaOfTriangle(5,5)).toBe(12.5);
  });
});