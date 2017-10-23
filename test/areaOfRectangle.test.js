const { areaOfRectangle } = require("../lib");

describe("areaOfRectangle", () => {
  it("should throw an error if either base or height is not a positive number", () => {
    expect(() => areaOfRectangle(5,0)).toThrow();
    expect(() => areaOfRectangle(0,5)).toThrow();
    expect(() => areaOfRectangle(-5,5)).toThrow();
    expect(() => areaOfRectangle(5,-5)).toThrow();
    expect(() => areaOfRectangle("five","five")).toThrow();
  });

  it("with length 10 and height 5 should have an area of 50", () => {
    expect(areaOfRectangle(10,5)).toBe(50);
  });

  it("with length 5 and height 10 should have an area of 50", () => {
    expect(areaOfRectangle(5,10)).toBe(50);
  });

  it("with length 5 and height 5 should have an area of 25", () => {
    expect(areaOfRectangle(5,5)).toBe(25);
  });
});
